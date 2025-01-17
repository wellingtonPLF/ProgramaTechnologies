from datetime import timedelta

class CookieUtil:

    def getCookieValue(self, request, name):
        try:
            cookieAccess = request.COOKIES.get(name)
            if (cookieAccess == None):
                return None
            return cookieAccess
        except:
            return None
	
    def create(self, response, name, value):

        config = { 
            "expires": timedelta(days=365), 
            "httponly": True,
            # "secure": True,
            # "samesite": "None",
            "domain": None,
            "path": "/"
        }
        #CookieName, TokenValue, Config
        response.set_cookie(name, value, **config)
        
    def clear(self, response, name):
        response.delete_cookie(name)