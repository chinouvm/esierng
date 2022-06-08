<p align="center"><img src="./assets/rnglogo.png" width="800x" /></p>
<p align="center">
  <img alt=Python" src="https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=python&logoColor=white" /> 
  <img alt=React" src="https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black" />
  <img alt=FastAPI" src="https://img.shields.io/badge/-FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white" />
  <img alt=Auth0" src="https://img.shields.io/badge/-Auth0-EB5424?style=flat-square&logo=auth0&logoColor=white" />
  <img alt=OpenCV" src="https://img.shields.io/badge/-OpenCV-5C3EE8?style=flat-square&logo=opencv&logoColor=white" />
  <img alt=Netlify" src="https://img.shields.io/badge/-Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white" />
  <img alt=Docker" src="https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=docker&logoColor=white" />
</p>

---

EsieRNG is a true random number generator based off of a highway full of traffic. 
With EsieRNG you can generate 32 and or 256bit Salts, 16 character passwords and 128Bit AESIV for encryption.

Your salts and passwords are generated with different types of pseudo-random generators combined with the random aspect of traffic. The generator uses a algorithm to detect how many cars are currently moving trough the camerafeed and uses this information combined with the pseudo-random generators to create cryptographically and mathematical secure salts, passwords and encryption keys.

## API Usage
To use the EsieRNG API for your own projects you need to create an account. You can do this by signing in with google on the [homepage](https://rng.esie.nl). When you've signed in, you can navigate to the account page and generate a new API key. **Note:** The API key is only valid for 30 Days.
                                                                                                                  
### Endpoints
The API URL is <strong>https://api.esie.nl/</strong> and the different endpoints are:

```
GET /v1/password   - Generate a password
GET /v1/salt32     - Generate a 32bit salt
GET /v1/salt256    - Generate a 256bit salt
GET /v1/aes128     - Generate a 128bit AES IV
```
The password endpoint can be used without an API key. The salt endpoints and the AES IV endpoint require an API key.

If you want to test these endpoints you can use the built in [API Documentation](https://api.esie.nl/docs)
                                                                                                                  
### Code example
These code examples are in Python but the general usages is the same for every language capable of making API requests.

Unauthenticated usage:

```Python
import requests

response = requests.get("https://api.esie.nl/v1/password")
print(response.json())
```

Authenticated usage:

```Python
import requests

my_headers = {"Authorization": "Bearer <token>"}
response = requests.get("https://api.esie.nl/v1/salt32", headers=my_headers)
print(response.json())
```

Please note that you need to add 'Bearer' in front of the token.

## Useful links
- [EsieRNG](https://rng.esie.nl) - The website to test out the generator and generate an API Token.
- [Documentation](https://rng.esie.nl/docs) - The official documentation with all the information you need.
- [API Info](https://api.esie.nl/docs) - The builtin API documentation provided by [swagger.io](https://swagger.io/).
  
---
<p align="center">
  🐵 Made by <a href="https://chinou.dev" target="_blank">Chinou</a>
</p>
