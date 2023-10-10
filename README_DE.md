# Allgemeine Übungen

1. Schreibe eine Funktion namens `triplet`, die einen Parameter entgegennimmt und diesen dreimal in die Konsole ausgibt. Für die Eingabe "Katze" würde sie "KatzeKatzeKatze" ausgeben.

2. Schreibe eine Funktion namens `quintuplet`, die einen Parameter entgegennimmt und diesen fünfmal wiederholt zurückgibt. Für die Eingabe "Katze" würde sie "KatzeKatzeKatzeKatze" zurückgeben.

3. Schreibe eine Funktion mit dem Namen `multiStr`, die zwei Parameter entgegennimmt, wobei der erste eine Zahl und der zweite ein String sein sollte. Die Funktion gibt das zweite Argument so oft wiederholt zurück, wie es der Wert des ersten Arguments definiert. Für die Eingaben `3` und `Woah` sollte sie `WoahWoahWoah` zurückgeben

4. Schreibe eine Funktion mit dem Namen `largestNumInArray` die ein Array von Zahlen als Parameter entgegennimmt. Sie soll die größte Zahl in dem Array zurückgeben. Für die Eingabe `[1,6,83,91,0,-4,1337,5]` sollte sie `1337` zurückgeben

5. Diese Aufgbae hat 2 Teile

    Teil a) Schreibe eine Funktion mit dem Namen `printIfDivisibleByTen`, die eine Zahl entgegennimmt und ein `"Even 10!"` auf der Konsole ausgibt, wenn die Zahl gerade durch 10 teilbar ist. Beispiele:

    - printIfDivisibleByTen(1) --> keine Ausgabe
    - printIfDivisibleByTen(2) --> keine Ausgabe
    - printIfDivisibleByTen(32) --> keine Ausgabe
    - printIfDivisibleByTen(10) --> "Even 10!" in die Konsole
    - printIfDivisibleByTen(30) --> "Even 10!" in die Konsole
    - printIfDivisibleByTen(90000) --> "Even 10!" in die Konsole

    Teil b) Schreibe eine for-Schleife, die 125 Mal durchläuft und dabei jedes Mal die Funktion, die du in Teil a erstellt hast, mit der aktuellen Iterationsnummer aufruft.

6. Schreibe eine Pfeilfunktion namens `largestNum` die 5 Zahlen als Parameter entgegennimmt und die größte zurückgibt.

7. Schreibe eine Pfeilfunktion mit dem Namen `isString`, die einen Parameter entgegennimmt und true zurückgibt, wenn dieser Parameter eine Zeichenkette ist.

8. Schreibe eine Pfeilfunktion mit dem Namen `areStrings`, die zwei Parameter entgegennimmt und true zurückgibt, wenn beide Strings sind.

9. Schreibe eine Pfeilfunktion mit dem Namen `getFirstWord`, die einen String als Parameter entgegennimmt. Die Funktion sollte das erste Wort der Zeichenkette zurückgeben. Beispiele:
    - getFirstWord("Internetting ist schwer") --> "Internetting"
    - getFirstWord("Hallo Welt") --> "Hallo"
    - getFirstWord("Hallo") --> "Hallo"

10. *SCHWER* Schreibe eine Pfeilfunktion namens `wordRepeater`, die einen String als Parameter entgegennimmt.
Die Funktion sollte eine neue Zeichenkette zurückgeben, in der jedes Wort der Eingabezeichenkette um die Anzahl der Wörter der Eingabezeichenkette wiederholt wird. Beispiele:
    - wordRepeater("Hase") --> "Hase"
    - wordRepeater("Cat Food") --> "Cat Cat food food"
    - wordRepeater("I am groot") --> "I I I am am am groot groot groot"
    - wordRepeater("O M G ?") --> "O O O O M M M M G G G G ? ? ? ?"

11. Schreibe eine kurze (einzeilige) Pfeilfunktion namens `firstLetter`, die eine Zeichenkette als Parameter entgegennimmt und das erste Zeichen dieser Zeichenkette zurückgibt. Beispiele:
    - firstLetter("cat") --> "c"
    - firstLetter("quylthulg") --> "q"

12. Schreibe eine Pfeilfunktion namens `firstLetters`, die eine Zeichenkette als Parameter entgegennimmt und eine neue Zeichenkette zurückgibt. Die neue Zeichenkette muss aus dem ersten Buchstaben jedes Wortes in der Eingabe gebildet werden. Beispiele:
    - firstLetters("Cat") --> C"
    - firstLetters("What the fruit") --> "Wtf"
    - firstLetters("MongoDB Express Node React") --> "MERN"
    - firstLetters("What You See Is What You Get") --> "WYSIWYG"

13. Schreibe eine Pfeilfunktion namens `len`, die einen Wert als Parameter entgegennimmt. Wenn dieser Wert ein String ist, gibt sie die Länge des Strings zurück. Wenn der Wert ein Array ist, gibt sie die Länge des Arrays zurück. Wenn es sich um einen anderen Wert handelt, gibt sie null zurück. Vielleicht musst du in Google suchen, um herauszufinden, wie du herausfinden kannst, ob das Argument ein Array ist - aber es gibt auch andere Möglichkeiten, dieses Problem zu lösen!

14. Schreibe eine Pfeilfunktion namens `explode`, die einen Wert als Parameter entgegennimmt. Wenn der Wert kein String ist, gib null zurück. Wenn es eine Zeichenkette ist, gib ein Array zurück, in dem jedes Zeichen der Zeichenkette ein einzelnes Array-Element ist. Beispiele:
    - explode("Cat") --> ["C", "a", "t"]
    - explode(41) --> null
    - explode("") --> []
    - explode("R & D") --> ["R", " ", "&", " ", "D"]

15. Reverse Engineering 1. Schreibe eine Funktion, die das Folgende tut (*BONUS*: schreibe sie als kurze (einzeilige) Pfeilfunktion):
    - foo("") -> false
    - foo("a") -> false
    - foo("o") -> wahr
    - foo("Cat") -> falsch
    - foo("Tomato") -> wahr
    - foo("Potato") -> true
    - foo("Blanket") -> false
    - foo("1") -> false

16. Reverse Engineering 2. Schreibe eine Funktion, die das Folgende tut (*BONUS*: schreibe sie als kurze (einzeilige) Pfeilfunktion):
    - bar("") --> "Cat"
    - bar("x") --> "Cat"
    - bar("Cat") --> "Catt"
    - bar("Foobar") --> "Catobar"
    - bar("Potato") --> "Cattato"
    - bar("Tomato") --> "Catmato"
    - bar("International Space Statio") --> "Catternational Space Station"
