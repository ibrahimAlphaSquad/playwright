import os
import json

def thread_file_path(pr_number):
    return f".slack-threads/pr-{pr_number}.json"

def save_thread_ts(pr_number, thread_ts):
    os.makedirs(".slack-threads", exist_ok=True)
    with open(thread_file_path(pr_number), "w") as f:
        json.dump({"thread_ts": thread_ts}, f)

def get_thread_ts(pr_number):
    try:
        with open(thread_file_path(pr_number), "r") as f:
            return json.load(f)["thread_ts"]
    except FileNotFoundError:
        return None
