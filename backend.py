from email import message
import whois
import re
from datetime import *

def contains_ip_address(url):
    reg = r"^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$"
    if re.match(reg, url):
        return True
    else:
        return False

def check_url_length(url):
    """
    Checks if the url is longer than 255 characters.
    :param url: The url to check.
    :return: 1 if the url is shorter than 54 characters, 0 if 54 <= url length <= 75, -1 otherwise
    """
    if len(url) < 54:
        return 1
    
    elif len(url) >= 54 and len(url) <= 75:
        return 0

    else:
        return -1

def get_domain_age(url):
    url_info = whois.whois(url)
    url_date = url_info.creation_date[1].date()
    #today = url_date.strftime("%Y%m%d")
    today = datetime.now().date()
    
    return today - url_date