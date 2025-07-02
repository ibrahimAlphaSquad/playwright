import requests

def search_slack_thread(slack_token, channel, thread_key):
    query = f'in:{channel} "{thread_key}"'
    response = requests.post(
        "https://slack.com/api/search.messages",
        headers={"Authorization": f"Bearer {slack_token}"},
        data={
            "query": query,
            "sort": "timestamp",
            "sort_dir": "asc",
            "count": "1"
        }
    )

    if response.status_code != 200:
        raise Exception(f"Slack API error: {response.text}")

    data = response.json()
    matches = data.get("messages", {}).get("matches", [])

    if matches:
        return matches[0].get("ts")  # thread_ts of the original message
    return None
