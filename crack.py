import requests, random, string, threading
from datetime import datetime

def crack():
  while True:
    game = ('').join(random.choices(string.digits, k=6))
    r = requests.get(f"https://fb.blooket.com/c/firebase/id?id={game}")
    res = r.json()
    if res["success"] == True:
      rn = datetime.now()
      time = rn.strftime("%H:%M:%S")
      print(f"[{time}] Pin Cracked | {game}")

am = int(input("Thread Amount: "))

for n in range(am):
  x = threading.Thread(target=crack, args=())
  x.start()
