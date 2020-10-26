import requests
from bs4 import BeautifulSoup
import re
import json
import time
import random

session = requests.Session()

URL = "https://www.finishline.com/store/product/big-kids-nike-little-posite-one-basketball-shoes/prod2772162?styleId=644791&colorId=407"

headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'en-US,en;q=0.9',
    'Connection': 'keep-alive',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode':'navigate',
    'Sec-Fetch-Site': 'none',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36',
}

resp = session.get(URL, headers=headers)
print(session.cookies.get_dict()['_abck'])
