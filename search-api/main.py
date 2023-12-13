from models.intellicite import IntelliCite

intellicite = IntelliCite()

result = intellicite.process("sleep deprivation and its effects on human memory")

for index, paper in enumerate(result):
    print(f"RESULT {index+1}:")
    print(f"ABSTRACT: {paper['abstract'][:200]}")
    print(f"HIGHLIGHTS: {paper['highlights']}")
    print(f"SENTIMENT: {paper['sentiment']}")
    print("--------------------------------------------------")