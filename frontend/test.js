const b = [
    { user: { name: "Kovács Béla", age: 25 }, type: "withdraw", amount: 3500, currency: "HUF" },
    { user: { name: "Varga Lajos", age: 35 }, type: "withdraw", amount: 4500, currency: "HUF" }
]


const sumOfWithdrawalsByTeenagers = (transactions) => {
  

    for(const data of transactions){
      if(data.type === "withdraw" && data.age < 20){
       consoel.log(data.amount)
        }else{
        consoel.log(0)
        }
    }
  }
sumOfWithdrawalsByTeenagers(b)