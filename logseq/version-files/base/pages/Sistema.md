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
	- Si distinguono:
		- **sistema analogico**
		  id:: 63453640-009e-4108-8bb3-a9e24234568a
			- ((634529dc-9a41-4c1f-86ce-c5ee18719fb0)) $\rightarrow$ analogico
			  collapsed:: true
				- ((634efdf7-bf51-498f-a0e4-3162c41587a6))
		- **sistema discreto**
			- ((63452a0b-2973-4b91-b2d8-ac38d386dfde)) $\rightarrow$ discreto
			  collapsed:: true
				- ((63d53276-d6fe-44f2-9e5d-2af2f37c8acd))
		- **sistema ibrido** (o convertitore)
			- analogico $\rightarrow$ ((63452d61-8bd1-4a91-8ef4-e2256cdfccbf))
				- es. campionatore
			- digitale $\rightarrow$ analogico
			  collapsed:: true
				- ((63d532ce-4cf8-423d-881c-7fde7486debd))
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
- # Spazi di funzioni #card
  id:: 64eaeffe-3968-42cb-9047-566bc2b5b37b
	- $x \in X$ dove $X$ è uno spazio vettoriale di funzioni
	- $X$ è uno spazio vettoriale di funzioni
		- Date due funzioni $x_1(t) \in X$ e $x_2(t) \in X$ sono definite
			- somma
				- $(x_1 + x_2)(t) = x_1(t) + x_2(t)$
			- prodotto per uno scalare
				- $(k x_1)(t) = kx_1(t) \quad \forall\, k \in \mathbb{R} \text{ oppure } \mathbb{C}$
	- $X : I \subseteq \mathbb{R} \rightarrow \mathbb{R} \text{ oppure } \mathbb{C}$
		- Ad esempio $I$ può essere $\mathbb{R}, (a, b), (a, +\infty), \ldots$
	- ## Norma
		- In uno spazio di funzioni il concetto di limite è spesso definito in termini di una norma $\|\cdot\|$ definita su ognuno degli spazi vettoriali.
		- Utile per definire la distanza tra due funzioni:
			- $$\text{dist}(x_, x_2) = \|x_1 - x_2 \|$$
		- $x_n \rightarrow x$ significa che $\lVert x_n - x \rVert = 0$
			- è necessario specificare rispetto a quale norma
		- Ci sono tre norme principalmente usate:
			- ### Norma infinito
			  id:: 64ee8341-d445-4da3-b2e1-0ba6d6bc2967
				- id:: 64ee834f-4c1c-4038-9db4-557425915680
				  $$\|x\|_\infty = \sup_{t\in I} |x(t)|$$
				- Definisce la convergenza uniforme
			- ### Norma 1
			  id:: 64ee8373-4033-47ed-a6b4-0cca8ea5fc11
				- id:: 64ee83d8-fbfc-489a-8e4b-641a5c80cd58
				  $$\|x\|_1 = \int_I |x(t)|\,dt$$
				- Definisce la convergenza media
			- ### Norma 2
				- id:: 64ee8414-006b-4ef4-8db5-bd9ff5c961f8
				  $$\|x\|_2 = \left( \int_I |x(t)|^2\,dt \right)^{\frac{1}{2}}$$
				- Rappresenta l'energia del segnale
				- Deriva da un prodotto scalare tra funzioni.
				  collapsed:: true
					- $$(x, y)_2 = \int_I x(t)\bar{y}(t)\,dt$$
						- $\bar{y}(t)$ è il complesso coniugato di $y(t)$
					- \begin{aligned}
					  (x, x) &= \int_I x(t) \bar{x}(t)\,dt \\
					  &= \int_I |x(t)|^2\,dt
					  \end{aligned}
						- che è il quadrato della norma.
						- $\|x\|_1 = \sqrt{(x, x)}$
		- La distanza può variare molto in base alla norma usata.
		  collapsed:: true
			- {{renderer excalidraw, excalidraw-2023-08-30-01-57-41}}
				- In questo caso, la distanza usando la norma infinito è alta mentre quella usando norma 1 è bassa.
		- ### Convergenza puntuale
			- Si dice che $x_n \rightarrow x$ puntualmente se
				- $$\lim_{n \rightarrow \infty} x_n(t) = x(t)\quad\forall\, t \in I$$
		- ## Caso discreto
			- Quando il segnale è discreto, si possono usare le norme analoghe:
				- $$\|x\|_\infty = \sup_{t\in I} |x(t)|$$
				- $$\|x\|_1 = \sum_{n = -\infty}^{+\infty} |x_n|$$
				- $$\|x\|_2 = \left( \sum_{n = -\infty}^{+\infty} |x_n|^2 \right)^{\frac{1}{2}}$$
			- $x^{(n)} \rightarrow x$ in $(X, \|\cdot\|_\infty)$ significa che:
				- $\|x^{(n)} - x\| \rightarrow 0$
				- $\|x^{(n)} - x\| = \sup_{k \in \Z} |x_k^{(n)} - x_k|$