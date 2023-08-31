tags:: complanalisi
material::  ![GasquetWitomski.pdf](../assets/GasquetWitomski_1665475774594_0.pdf)

- # Definizione #card
  card-last-interval:: -1
  card-repeats:: 1
  card-ease-factor:: 2.5
  card-next-schedule:: 2022-01-21T23:00:00.000Z
  card-last-reviewed:: 2023-01-21T11:51:36.953Z
  card-last-score:: 1
	- Funzione matematica sul tempo.
		- $x = x(t)$
	- Ci sono diversi modi di pensare a un segnale: #.ol
		- Può essere modellato:
			- **deterministicamente**
				- il punto di vista deterministico è l'unico usato qui.
			- **statisticamente**
		- Il segnale può essere:
			- **analogico**
			  id:: 634529dc-9a41-4c1f-86ce-c5ee18719fb0
				- la variabile $x = x(t)$ con $t \in \mathbb{R}$ è continua
			- **discreto**
			  id:: 63452a0b-2973-4b91-b2d8-ac38d386dfde
				- la variabile $x = x_n$ con $n \in \mathbb{N}$ è discreta
				- un segnale discreto è molto spesso risultato del *campionamento* (o *discretizzazione*) di un segnale analogico
		- **quantizzazione**
			- I valori di un segnale $x = x(t)$ (numeri esattamente reali o complessi) vengono memorizzati in qualche forma finita, ad esempio come multiplo di una quantità elementare $q$.
				- necessario per l'elaborazione di calcolatori
			- **segnale digitale**
			  id:: 63452d61-8bd1-4a91-8ef4-e2256cdfccbf
				- segnale discreto quantizzato
- # Esempi
	- Segnale acustico
		- variazione della pressione atmosferica al variare del tempo
- # Segnali elementari
	- ## Funzione Heaviside #card
		- $$
		  u(t) = \begin{cases}
		  0 & \text{se } t < 0 \\
		  1 & \text{se } t > 0
		  \end{cases}
		  $$
		- ((63d5783c-0a5a-4449-9f80-6e80c87edbfe)) della semiretta positiva, con la differenza che resta indefinita su 0.
			- O funzione segno indefinita su 0.
	- ## Funzione caratteristica #card
	  id:: 63d5783c-0a5a-4449-9f80-6e80c87edbfe
		- $$\chi_A(x) = \begin{cases}
		  1 & \text{se } x \in A \\
		  0 & \text{se } x \notin A
		  \end{cases}$$
	- ## Finestra rettangolare #card
	  card-last-score:: 1
	  card-repeats:: 1
	  card-next-schedule:: 2023-08-27T22:00:00.000Z
	  card-last-interval:: -1
	  card-ease-factor:: 2.5
	  card-last-reviewed:: 2023-08-27T08:36:02.588Z
		- $$r(t) = \begin{cases}
		  1 & \text{se } |t| < a \\
		  0 & \text{se } |t| > a
		  \end{cases}$$
			- ((63d5783c-0a5a-4449-9f80-6e80c87edbfe)) dell'intervallo $(-a, a)$
			  collapsed:: true
				- ((63d54c05-5822-4781-a96e-49dc6e79f219))
	- ## Segnale puro sinusoidale o monocromatico #card
		- $$x(t) = \alpha \cos(\omega t + \varphi) + c$$
			- Il termine sinusoide descrive qualunque onda con le caratteristiche di un onda seno.
				- Anche l'onda coseno è detta sinusoidale, dato che $\cos(x)=\sin(x+\pi/2)$
			- <iframe src="https://www.desmos.com/calculator/iq4zfz9r3i?embed" width="500" height="300" style="border: 1px solid #ccc" frameborder=0></iframe>
			- <iframe src="https://www.desmos.com/calculator/kksf4azcni?embed" width="500" height="300" style="border: 1px solid #ccc" frameborder=0></iframe>
			- <iframe src="https://www.desmos.com/calculator/evrvxgzxk5?embed" width="500" height="300" style="border: 1px solid #ccc" frameborder=0></iframe>
			- ### Parametri
				- #### Ampiezza
					- $|\alpha| = \max | x(t) |$
					- amplifica o smorza le oscillazioni verticali
					- la funzione oscillerà tra $-\alpha$ e $\alpha$
					- quanto è alto il **volume** del suono
				- #### Frequenza
					- $\omega$
					- legato alla velocità con cui il segnale oscilla
					- inverso del periodo
					- | Funzione | Periodo | Frequenza |
					  |:---:|:---:|:---:|
					  | $\cos(t)$ | $2\pi$ | $\frac{1}{2\pi}$ |
					  | $\cos(\omega t)$ | $\frac{2\pi}{\omega}$ | $\frac{\omega}{2\pi}$ |
					  | $\cos(\lambda 2\pi t)$ | $\frac{\cancel{2\pi}}{\cancel{2\pi}\lambda} = \frac{1}{\lambda}$ | $\lambda$ |
				- #### Fase iniziale
					- $\varphi$
					- indica come inizia la curva del coseno
					- impercettibile dal punto di vista acustico
				- #### Altezza base
					- $c$
					- pressione atmosferica di base
					- impercettibile dal punto di vista acustico
			- ### Rappresentazione complessa
				- $$\begin{aligned}
				  z(t) &= \alpha e^{i(\omega t + \varphi)} \\
				  &= \alpha(\cos(\omega t + \varphi) + i \sin(\omega t + \varphi))
				  \end{aligned}$$
				- Molto comoda in molte situazioni (es. elettronica)
				- Più difficile da rappresentare
			-