f = open('recognized.txt','r')
sentence = f.read()
import copy

word = sentence.split()
word1= copy.copy(word)
for i in word1:
    if( "Mod" in i):
        break
    else:
        word.remove(i)

word2 = copy.copy(word)
for i in range(0,len(word2)):
    if("Mod" in word2[i]):
        k=i
        while(word2[k] != "hours"):
            print(word2[k])
            word.remove(word2[k])
            k = k+1
        print(word2[k])
        word.remove(word2[k])
# print(word)

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
print(a)