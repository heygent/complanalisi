tags:: complanalisi
material::  ![GasquetWitomski.pdf](../assets/GasquetWitomski_1665475774594_0.pdf)

- # Sistema
	- Una qualunque entità o apparato dove possono essere distinti [segnali]([[Segnale]]) di input e di output.
		- I segnali di input e output non sono necessariamente dello stesso tipo
	- ((649d49b9-23c9-40b0-87be-2b307806b067))
		- Quando ci sono più segnali di input o output, le funzioni $x(t)$ e $y(t)$ sono vettori.
	- In teoria dei segnali non ci si interessa dei componenti di un sistema, ma piuttosto del modo in cui trasforma il segnale di input nel segnale di output ("scatola nera").
	- Il sistema è modellato come un operatore che agisce su funzioni, per cui si scrive:
		- $$y = Ax$$
			- $x \in X$ [[Spazio di funzioni]] di input
			- $y \in Y$ spazio di funzioni di output
- # Esempi di sistemi
	- ## Amplificatore ideale #card
		- $$y(t) = kx(t)$$
		- Per $k > 1$ amplifica, per $0 < k < 1$ smorza.
		-
	- ## Delay line
		- $$y(t) = x(t - a)$$
		- Per $a > 0$ ritarda, per $a < 0$ anticipa
		- <iframe src="https://www.desmos.com/calculator/u4vvlkcjpp?embed" width="500" height="200" style="border: 1px solid #ccc" frameborder=0></iframe>
	- ## Differenziatore
		- $$y(t) = x'(t)$$
			- Dove $x'$ è la derivata di $x$.