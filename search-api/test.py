from models.intellicite import IntelliCite

intellicite = IntelliCite()

result = intellicite.process("sleep deprivation")
for paper in result:
    print(paper["highlights"])
# print(result)