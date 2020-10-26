import requests
from bs4 import BeautifulSoup
import re
import json
import time
import random

session = requests.Session()

URL = "https://www.dickssportinggoods.com/p/brooks-mens-hyperion-tempo-running-shoes-20bromhyprntmpblkmns/20bromhyprntmpblkmns"

headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'en-US,en;q=0.9',
    'Connection': 'keep-alive',
    'Host': 'www.dickssportinggoods.com',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode':'navigate',
    'Sec-Fetch-Site': 'none',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36',
}

#resp = session.get(URL, headers=headers)
#print(session.cookies.get_dict()['_abck'])

URL = "https://www.dickssportinggoods.com/api/v1/carts/contents/21096929?qty=1"

resp = session.put(URL, params={'qty': 1}, headers=headers)
