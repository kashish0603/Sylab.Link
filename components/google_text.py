import json
try:
	from googlesearch import search
except ImportError:
	print("No module named 'google' found")

# to search
query = "Standingwavesandtheireigenfrequencies"

for j in search(query, tld="co.in", num=2, stop=2, pause=2):
	print(j)
	q =[]
	q.append({"link": j})
	print (json.dumps(q, indent=4))