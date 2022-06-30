import urllib.request
import re
import json

search_keyword="Standingwavesandtheireigenfrequencies"
html = urllib.request.urlopen("https://www.youtube.com/results?search_query=" + search_keyword)
video_ids = re.findall(r"watch\?v=(\S{11})", html.read().decode())
for i in range(0,3):

    print("https://www.youtube.com/watch?v=" + video_ids[i])
    q =[]
    q.append({"link": "https://www.youtube.com/watch?v=" + video_ids[i]})
    print (json.dumps(q, indent=4))