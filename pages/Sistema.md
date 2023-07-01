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
			- $x \in X$ insieme dei segnali di input
			- $y \in Y$ insieme dei segnali di output
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
	- ## Amplificatore ideale
		- $$y(t) = kx(t)$$
		- Per $k > 1$ amplifica, per $0 < k < 1$ smorza.
	- ## Delay line
		- $$y(t) = x(t - a)$$
		- Per $a > 0$ ritarda, per $a < 0$ anticipa
	- ## Differenziatore
		- $$y(t) = x'(t)$$
			- Dove $x'$ è la derivata di $x$.
- # Spazi di funzioni
	- $x \in X$ dove $X$ è uno spazio vettoriale di funzioni
	- $X$ è uno spazio vettoriale di funzioni
		- Date due funzioni $x_1(t) \in X$ e $x_2(t) \in X$ sono definite
			- somma
				- $(x_1 + x_2)(t) = x_1(t) + x_2(t)$
			- prodotto per uno scalare
				- $(k x_1)(t) = kx_1(t) \quad \forall\, k \in \mathbb{R} \text{ oppure } \mathbb{C}$
	- $X : I \subseteq \mathbb{R} \rightarrow \mathbb{R} \text{ oppure } \mathbb{C}$
		- Ad esempio $I$ può essere:
			- $I = \mathbb{R}$
			- $I = (a, b)$
			- $I = (a, +\infty)$
			- ...
- # Filtro
	- ## Definizione #card
		- Un filtro è un sistema che gode delle proprietà di:
			- ((6495cd82-7d09-45ed-bb57-0becdb7682d1))
			- ((6495cd82-0669-47e2-b342-fad23ec4818e)) (non necessaria, se presente rende il filtro realizzabile)
			- ((6495cd82-783c-40b8-b59a-0668eb7f5b7c))
			- ((6495cd82-a9f1-4f4d-b03d-607629923f63))
	- ## Proprietà
		- Sia $A : X \rightarrow Y$
			- Alternativamente:
				- $A : x = x(t) \in X \rightarrow y = y(t) \in Y$
				- $A : x \rightarrow y$
		- ### Linearità #card
		  id:: 6495cd82-7d09-45ed-bb57-0becdb7682d1
			- $(\lambda x_1 + \mu x_2)(t) = \lambda x_1(t) + \mu x_2(t) \in X$
				- $\forall\,x_1, x_2 \in X, \forall\, \lambda, \mu \in \mathbb{C}$
			- Se $x_1 \xrightarrow{A} y_1$ e $x_2 \xrightarrow{A} y_2$
				- Ovvero $y_1 = Ax_1$ e $y_2 = Ax_2$
				- Allora quando $A(\lambda x_1 + \mu x_2) = \lambda y_1 + \mu y_2$ dico che il sistema è lineare.
			- Dal punto di vista fisico si ha una sovrapposizione degli effetti.
		- ### Causalità #card
		  id:: 6495cd82-0669-47e2-b342-fad23ec4818e
			- Si vuole formalizzare il fatto che non anticipa i tempi e risponde al principio di causa-effetto.
			- Non è una proprietà obbligatoria di un filtro, ma lo rende realizzabile.
			- $$\tag{a} x_1(t) = x_2(t) \;\forall\, t < t_0 \quad\Rightarrow \quad Ax_1(t) = Ax_2(t) \;\forall\, t < t_0$$
				- Se le due funzioni sono uguali fino a un certo punto, l'output del sistema deve essere uguale fino a quel punto.
			- Equivalentemente:
				- $$x(t) = 0 \;\forall\, t < t_0 \quad \Rightarrow \quad Ax(t) = 0 \;\forall\, t < t_0 \tag{b}$$
			- $\text{a} \leftrightarrow \text{b}$
				- $\text{b}$ è un caso speciale di $\text{a}$ dove la funzione equazione è nulla.
				- $\text{b} \rightarrow \text{a}$
					- Dimostrazione (si supponga $A$ lineare):
						- $$\begin{aligned}
						  &\phantom{\rightarrow} z(t) = x_1(t) - x_2(t) = 0 &\forall\, t < t_0 \\
						  &\rightarrow Az(t) = 0 & \\
						  &\rightarrow A(x_1(t) - x_2(t)) = 0 & \\
						  &\rightarrow Ax_1(t) - Ax_2(t) = 0 & \\
						  &\rightarrow Ax_1(t) = Ax_2(t) &\forall \,t < t_0
						  \end{aligned}$$
		- ### Invarianza per traslazione #card
		  id:: 6495cd82-783c-40b8-b59a-0668eb7f5b7c
			- $$x(t) \rightarrow y(t) \quad \Rightarrow \quad x(t- a) \rightarrow y(t-a)$$
			- Una traslazione nel tempo dell'input porta alla stessa traslazione dell'input.
			- Nessun sistema rispetta in assoluto questa proprietà.
				- Generalmente oggetti fisici si logorano nel tempo, es. batteria.
			- Sia $\tau_a$ l'operatore delay definito da:
				- $$\tau_a x(t) = x(t - a)$$
			- Se $A$ è invariante, allora:
				- $$A(\tau_a x) = \tau_a (Ax) \quad \forall\,x \in X, a \in \mathbb{R}$$
				- $$A \tau_a = \tau_a A$$
					- Che significa che $A$ si commuta con le traslazioni.
		- ### Continuità #card
		  id:: 6495cd82-a9f1-4f4d-b03d-607629923f63
			- Un sistema $A : X \rightarrow Y$ è detto continuo se $Ax_n = y_n$ tende ad $A_x = y$ quando la sequenza $x_n$ tende a $x$.
				- Se $x_n$ si avvicina ad $x$ nello spazio di partenza, allora $y_n$ si avvicina ad $y$ nello spazio di arrivo.
			- $$\lim_{n\rightarrow \infty} x_n = x \rightarrow \lim_{n \rightarrow \infty} y_n = y$$
				- Dato che le $x$ non sono numeri ma funzioni, bisogna dare un concetto di limite che funzioni per funzioni.🫰
				- Per dare questo concetto, si usa l'idea di norma, definita su ognuno degli spazi vettoriali $X$ e $Y$.
				- $x_n \rightarrow x$ significa che $\lVert x_n - x \rVert = 0$
				- $\forall\,x \in X \,\exists\, c > 0 \mid \|A_x\|_y \le c \|x\|_X$
				-