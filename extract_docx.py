from zipfile import ZipFile
import xml.etree.ElementTree as ET
import sys
path = r"C:\Users\Thatr\Downloads\Larry_Butler_Resume (1).docx"
try:
    with ZipFile(path) as z:
        xml = z.read('word/document.xml')
    root = ET.fromstring(xml)
    namespaces = {'w':'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
    paras = []
    for p in root.findall('.//w:p', namespaces):
        texts = [t.text for t in p.findall('.//w:t', namespaces) if t.text]
        if texts:
            paras.append(''.join(texts))
    output = '\n\n'.join(paras)
    print(output)
except Exception as e:
    print('ERROR:', e)
