tags:: complanalisi

- # Definizione #card
  card-last-interval:: -1
  card-repeats:: 1
  card-ease-factor:: 2.5
  card-next-schedule:: 2023-09-13T22:00:00.000Z
  card-last-reviewed:: 2023-09-12T22:01:54.741Z
  card-last-score:: 1
	- Funzione matematica sul tempo.
		- $x = x(t)$
	- Ci sono diversi modi di pensare a un segnale:
		- Può essere modellato:
		  logseq.order-list-type:: number
			- **deterministicamente**
			  logseq.order-list-type:: number
				- il punto di vista deterministico è l'unico usato qui.
			- **statisticamente**
			  logseq.order-list-type:: number
		- Il segnale può essere:
		  logseq.order-list-type:: number
			- **analogico**
			  id:: 634529dc-9a41-4c1f-86ce-c5ee18719fb0
			  logseq.order-list-type:: number
				- la variabile $x = x(t)$ con $t \in \mathbb{R}$ è continua
			- **discreto**
			  id:: 63452a0b-2973-4b91-b2d8-ac38d386dfde
			  logseq.order-list-type:: number
				- la variabile $x = x_n$ con $n \in \mathbb{N}$ è discreta
				- un segnale discreto è molto spesso risultato del *campionamento* (o *discretizzazione*) di un segnale analogico
		- **quantizzazione**
		  logseq.order-list-type:: number
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
	  id:: 64eaeffe-1615-4958-a30d-6caec1f624d9
	  card-last-interval:: -1
	  card-repeats:: 1
	  card-ease-factor:: 2.5
	  card-next-schedule:: 2023-09-14T22:00:00.000Z
	  card-last-reviewed:: 2023-09-14T05:49:23.101Z
	  card-last-score:: 1
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
	  card-last-interval:: 4
	  card-repeats:: 2
	  card-ease-factor:: 2.6
	  card-next-schedule:: 2023-09-18T05:40:13.159Z
	  card-last-reviewed:: 2023-09-14T05:40:13.159Z
	  card-last-score:: 5
		- $$\chi_A(x) = \begin{cases}
		  1 & \text{se } x \in A \\
		  0 & \text{se } x \notin A
		  \end{cases}$$
	- ## Finestra rettangolare #card
	  card-last-score:: 1
	  card-repeats:: 1
	  card-next-schedule:: 2023-09-14T22:00:00.000Z
	  card-last-interval:: -1
	  card-ease-factor:: 2.5
	  card-last-reviewed:: 2023-09-14T05:49:26.631Z
		- $$r(t) = \begin{cases}
		  1 & \text{se } |t| < a \\
		  0 & \text{se } |t| > a
		  \end{cases}$$
			- ((63d5783c-0a5a-4449-9f80-6e80c87edbfe)) dell'intervallo $(-a, a)$
			  collapsed:: true
				- ((63d54c05-5822-4781-a96e-49dc6e79f219))
	- ## Segnale puro sinusoidale o monocromatico #card
	  card-last-interval:: -1
	  card-repeats:: 1
	  card-ease-factor:: 2.5
	  card-next-schedule:: 2023-09-14T22:00:00.000Z
	  card-last-reviewed:: 2023-09-14T05:25:06.782Z
	  card-last-score:: 1
		- $$x(t) = \alpha \cos(\omega t + \varphi) + c$$
			- Il termine sinusoide descrive qualunque onda con le caratteristiche di un onda seno.
				- Anche l'onda coseno è detta sinusoidale, dato che $\cos(x)=\sin(x+\pi/2)$
			- <iframe src="https://www.desmos.com/calculator/92mvpj2poj?embed" width="500" height="300" style="border: 1px solid #ccc" frameborder=0></iframe>
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
				- Spesso rappresentato per convenzione come:
					- $$e_λ^n = e^{2πinλt}$$
		- ## Seno cardinale
		  id:: 64eaeffe-fee4-4d2c-832e-cc123d1739e9
			- $$f(x) = \frac{\sin(x)}{x}$$
			- <iframe src="https://www.desmos.com/calculator/g0cy2uuhrf?embed" width="500" height="300" style="border: 1px solid #ccc" frameborder=0></iframe>
				- La funzione non è definita per $ω = 0$
					- $\liml_{ω \to 0} \frac{\sin(2aπω)}{2aπω} = 2a$
				-
				-