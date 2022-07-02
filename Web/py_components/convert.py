import json

data = json.loads("E:/Projects/Squid_Game/youtube.json")

for i in data:
    if(data["title"] == "Module:2"):
        print(data["link1"])