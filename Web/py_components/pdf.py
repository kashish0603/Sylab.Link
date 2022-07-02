import PyPDF2
	
# creating a pdf file object
pdfFileObj = open('E:/Projects/Squid_Game/BPHY101L_ENGINEERING-PHYSICS_TH_1.0_67_BPHY101L_63 ACP.pdf', 'rb')
	
# creating a pdf reader object
pdfReader = PyPDF2.PdfFileReader(pdfFileObj)
	
# printing number of pages in pdf file
print(pdfReader.numPages)
	
# creating a page object
pageObj = pdfReader.getPage(0)
	
# extracting text from page
print(pageObj.extractText())
	
# closing the pdf file object
pdfFileObj.close()