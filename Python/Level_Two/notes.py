#SPECIAL METHODS

class Book():
    def __init__(self,title,author,pages):
        self.title = title
        self.author = author
        self.pages = pages

    def __str__(self):
        return "Title: {}, Author; {}, Pages: {}".format(self.title,self.author,self.pages)

    def __len__(self):
        return self.pages

    def __del__(self):
        print("a book is destroyed!")


b = Book("Python", "jose",200)
print(len(b))
del b


















# #INHERITANCE
# class Animal():
#
#     def __init__(self):
#         print("ANIMAL CREATED")
#
#     def whoAmI(self):
#         print("ANIMAL")
#
#     def eat(self):
#         print('EATING')
#
# class Dog(Animal):
#
#     def __init__(self):
#         # Animal.__init__(self)
#         print("DOG CREATED")
#
#     def bark(self):
#         print("WOOF")
#
#     def eat(self):
#         print("EAT")
#
#
# mydog = Dog()
# mydog.whoAmI()
# mydog.eat()
# mydog.bark()






# class Circle():
#
#     pi = 3.14
#
#     def __init__(self,radius=1):
#         self.radius = radius
#
#     def area(self):
#         return self.radius * self.radius * Circle.pi
#
#     def set_radius(self,new_r):
#         self.radius = new_r
#
# myc = Circle(3)
# myc.set_radius(999)
# # myc.radius = 100
# print(myc.area())




# class Dog():
#
#     #Class Object Attribute
#     species = "mammal"
#
#     def __init__(self,breed,name):
#         self.breed = breed
#         self.name = name
#
# mydog = Dog(breed = "Lab",name = "Sammy")
# #mydog = Dog("Lab","Sammy") has to be in same order as __init__
# print(mydog.breed)
# print(mydog.name)
# print(mydog.species)
