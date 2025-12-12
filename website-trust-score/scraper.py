# scraper.py
import requests
from bs4 import BeautifulSoup
import re 
# CRITICAL FIX: Import exceptions for robust network handling
from requests.exceptions import Timeout, HTTPError 

def get_trustpilot_data(company_name):
    """Scrapes overall rating and review count from a Trustpilot page."""
    
    url = f"https://www.trustpilot.com/review/{company_name}"
    
    try:
        # Use a short, firm timeout (5 seconds is often safer than 10 for APIs)
        response = requests.get(url, timeout=5) 
        response.raise_for_status()
        
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # --- 1. Extract the Overall Rating (e.g., '4.7') ---
        # The rating is inside a <p> tag with the unique class styles_trustScore__MVJJI
        rating_tag = soup.find('p', class_='styles_trustScore__MVJJI')
        overall_rating = rating_tag.text.strip() if rating_tag else "N/A"
        
        # --- 2. Extract the Review Count (e.g., '5K reviews') ---
        # The count is inside a <p> tag with the unique class styles_reviewCount__NXlel
        review_count_tag = soup.find('p', class_='styles_reviewCount__NXlel')
        
        # Clean up the count (e.g., remove " reviews")
        review_count_raw = review_count_tag.text.strip() if review_count_tag else "N/A"
        review_count = review_count_raw.replace(" reviews", "")
        
        # You will need to implement a function later to convert "5K" to 5000, 
        # but for now, extracting the raw string is a success!

        return {
            "is_found": True,
            "url": url,
            "review_count": review_count,
            "overall_rating": overall_rating 
        }
    
    # --- CATCH BLOCK WITH TIMEOUT FIX ---
    except Timeout:
        # Catch network hangs and fail gracefully
        return {"is_found": False, "message": "Scraping Error: Connection timed out after 5 seconds."}
    except HTTPError:
        # Catch 4xx or 5xx errors
        return {"is_found": False, "message": f"Trustpilot page not found for {company_name} (4xx/5xx error)."}
    except Exception as e:
        # Catch all other parsing/unknown errors
        return {"is_found": False, "message": f"Scraping Error: Failed to parse required tags. {e}"}