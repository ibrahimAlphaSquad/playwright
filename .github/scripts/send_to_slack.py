import os
import json
import requests
from slack_utils import search_slack_thread

def main():
    pr_number = os.getenv("NUMBER")
    is_new_pr = os.getenv("IS_NEW_PR") == "true"
    thread_key = os.getenv("THREAD_KEY")
    channel = os.getenv("SLACK_CHANNEL")
    slack_token = os.getenv("SLACK_USER_OAUTH_TOKEN")  # must be set as secret

    # For non-new PRs: find original thread via Slack search
    thread_ts = None
    if not is_new_pr:
        thread_ts = search_slack_thread(slack_token, channel, thread_key)

    payload = {
        "channel": channel,
        "attachments": [
            {
                "color": os.getenv("COLOR", "#cccccc"),
                "pretext": f"*{os.getenv('GITHUB_REPOSITORY')}*",
                "title": f"{os.getenv('TITLE')} #{pr_number}",
                "title_link": os.getenv("TITLE_LINK"),
                "text": os.getenv("MESSAGE"),
                "footer": f"GitHub Actions • Thread-Key: {thread_key}",
                "footer_icon": "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
                "mrkdwn_in": ["text", "pretext", "footer"],
                "ts": os.getenv("TIMESTAMP")
            }
        ]
    }

    if thread_ts:
        payload["thread_ts"] = thread_ts

    webhook_url = os.getenv("SLACK_INCOMING_WEBHOOK_URL")
    response = requests.post(webhook_url, json=payload)

    if response.status_code != 200:
        print("Slack response:", response.text)
        raise Exception("Failed to send Slack message")

if __name__ == "__main__":
    main()
