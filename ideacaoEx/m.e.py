# priceHouse = int(input('Insira o preço da casa: '))
# salary = int(input('Insira o sálario do comprador: '))
# years = int(input('Insira a quantidade de anos a pagar: '))

# def installment(priceHouse, years):
#     months = years * 12
#     installment = round(priceHouse / months)
#     return installment

# def percentSalary(salary):
#     prestacao = installment(priceHouse, years)
#     return round((prestacao / salary) * 100)

# def userAproved():
#     if percentSalary(salary) <= 30:
#         return print(f"O salario do comprador eh: R${salary}, o financiamento foi aprovado, com prestações de {installment(priceHouse, years)}.")
#     else:
#         return print("As prestações ficaram acima de 30% do sálario do comprador.")

# userAproved()

priceHouse = int(input("Digite o preço da casa: "))
adressHouse = input("Digite o endereço da casa: ")
yearsInstallment = int(input("Digite os anos de parcelamento: "))
salaryBuyer = int(input("Digite o salário do comprador: "))

class House:
    def __init__(self, price, adress):
        self.__price = price
        self.adress = adress

    @property
    def price(self):
        return self.__price


class Buyer:
    def __init__(self, salary, years):
        self.__salary = salary
        self.years = years

    @property
    def salary(self):
        return self.__salary

    def getMonths(self):
        return self.years * 12

    def checkFunding(self, house):
        installment = round(house.price / self.getMonths())
        percent = round((installment /  self.salary) * 100)

        if percent <= 30:
            return print(f"O salário do comprador é: R${self.salary}, o financiamento foi aprovado, com prestações de R${installment}.")
        else:
            return print("As prestações ficaram acima de 30% do sálario do comprador.")


Luiz = Buyer(salaryBuyer, yearsInstallment)
CasaFlorita = House(priceHouse, adressHouse)

Luiz.checkFunding(CasaFlorita)