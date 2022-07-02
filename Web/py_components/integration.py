#image_extraction
import cv2
import pytesseract
import urllib.request
import re
import json


pytesseract.pytesseract.tesseract_cmd = 'C:/Program Files/Tesseract-OCR/tesseract.exe'

img = cv2.imread("E:/Personal/Bunny's material/VIT/MY PROJECTS/Web-Dev/SQUID-GAME/Squid_Game/ss1.png")

gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

ret, thresh1 = cv2.threshold(gray, 0, 255, cv2.THRESH_OTSU | cv2.THRESH_BINARY_INV)

rect_kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (18, 18))

dilation = cv2.dilate(thresh1, rect_kernel, iterations = 1)

contours, hierarchy = cv2.findContours(dilation, cv2.RETR_EXTERNAL,
												cv2.CHAIN_APPROX_NONE)

im2 = img.copy()

file = open("recognized.txt", "w+")
file.write("")
file.close()

for cnt in contours:
	x, y, w, h = cv2.boundingRect(cnt)
	
	rect = cv2.rectangle(im2, (x, y), (x + w, y + h), (0, 255, 0), 2)
	
	cropped = im2[y:y + h, x:x + w]
	
	# file = open("recognized.txt", "a")
	
	text = pytesseract.image_to_string(cropped)
	
	# file.write(text)
	# file.write("\n")
	
# 	# file.close

#word_exxtraction
# f = open('recognized.txt','r')
# sentence = file.read()
import copy

word = text.split()
word1= copy.copy(word)
for i in word1:
    if( "Mod" in i):
        break
    else:
        word.remove(i)
mod = []
word2 = copy.copy(word)
for i in range(0,len(word2)):
    if("Mod" in word2[i]):
        k=i
        mod.append(word2[i])
        while(word2[k] != "hours"):
            # print(word2[k])
            word.remove(word2[k+1])
            k = k+1
        # print(word2[k])
        # word.remove(word2[k])
# print(word)
# print(mod)
#splitting    
a =[]
st = ''
for i in word:
    if(i == '-'):
        a.append(st)
        st = ''
        continue

    else:
        st = st + i 
# print(a)

# #searching 

try:
	from googlesearch import search
except ImportError:
	print("No module named 'google' found")

#search
d=0
n=-1
q={}
h=[]
h1=[]
q1 ={}
# l = ["Module:1linearalgebra", "Module:2wa�veequation", "differentialequationsandtransforms"]
for str in a:

    
    if "Mod" in str :
        n=n+1
        str = str[8:]
     
   
    j = ""
    for p in str:
        if ((p.isalpha()) == True) or ((p.isnumeric()) == True):
            j = j + p
            
        else:
            continue     
    
    search_keyword = j
    html = urllib.request.urlopen("https://www.youtube.com/results?search_query=" + search_keyword)
    video_ids = re.findall(r"watch\?v=(\S{11})", html.read().decode())
    for i in range(0,2):
        print(j)
        print("https://www.youtube.com/watch?v=" + video_ids[i])
        # q1={}
        # q1["title"] = mod[n]
        # q1["heading"] = j
        # q1["link1"] = "https://www.youtube.com/watch?v=" + video_ids[i]
        
        # q1.append({mod[n] : { "heading" : j, "link": "https://www.youtube.com/watch?v=" + video_ids[i]}})
        # print (json.dumps(q1, indent=4))
        h1.append({"heading": j, "link1": "https://www.youtube.com/watch?v=" + video_ids[i]})
    
    q1[mod[n]] = h1
    print(json.dumps(q1, indent = 4))
    h1=[]
        
        
        
        
	        
    for k in search(search_keyword, tld="co.in", num=2, stop=2, pause=2):
        print(j)
        print(k)
        # q={}
        # q["title"] = mod[n]
        # q["heading"] = j
        # q["link1"] = k
        h.append({"heading": j, "link1": k})
        # q.append({ mod[n]: {"heading": j, "link1": k}})
    q[mod[n]] = h
    print(json.dumps(q, indent = 4))
    h=[]
    
               
data = json.dumps(q1, indent=4) 
file = open("youtube1.json", "a")
file.write(data)  
file.close 
data1 = json.dumps(q, indent=4) 
file1 = open("google1.json", "a")
file1.write(data1)
file1.close 