const account = {
    name : 'Maryam',
    income : [],
    outgo : [],
    addOutgo : function(description, amount){
        this.outgo.push({
            description : description,
            amount : amount
        })
    },
    addIncome : function(description, amount) {
        this.income.push({
            description : description,
            amount : amount
        })
    },
    getAccountSummary : function(){
        let totalOutgo = 0
        let totlaIncome = 0
        let accountBalance =0
        this.income.forEach(function(item){
            totlaIncome = totlaIncome + item.amount
        }),
        this.outgo.forEach(function(item){
            totalOutgo = totalOutgo + item.amount
        }),
        accountBalance = totlaIncome - totalOutgo
        return (
            `${this.name} - balance : ${accountBalance}- income : ${totlaIncome} - outgo : ${totalOutgo}`
        )    
    }
}



account.addOutgo('book', 200)
account.addOutgo('cofe', 300)
account.addIncome('job', 1000)
console.log(account.getAccountSummary())