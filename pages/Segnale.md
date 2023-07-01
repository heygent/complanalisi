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
		  collapsed:: true
			- O funzione segno indefinita su 0.
			- ((63d5363e-8dac-4d54-bc67-604c40523300))
	- ## Funzione caratteristica
	  id:: 63d5783c-0a5a-4449-9f80-6e80c87edbfe
		- $$\chi_A(x) = \begin{cases}
		  1 & \text{se } x \in A \\
		  0 & \text{se } x \notin A
		  \end{cases}$$
	- ## Finestra rettangolare #card
		- $$r(t) = \begin{cases}
		  1 & \text{se } |t| < a \\
		  0 & \text{se } |t| > a
		  \end{cases}$$
			- ((63d5783c-0a5a-4449-9f80-6e80c87edbfe)) dell'intervallo $(-a, a)$
			  collapsed:: true
				- ((63d54c05-5822-4781-a96e-49dc6e79f219))
	- ## Segnale puro sinusoidale o monocromatico #card
		- $$x(t) = \alpha \cos(\omega t + \varphi) + c$$
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
						- $\cos(t)$
							- periodo $2\pi$
							- frequenza $\frac{1}{2\pi}$
						- $\cos(\omega t)$
							- periodo $\frac{2\pi}{\omega}$
							- frequenza $\frac{\omega}{2\pi}$
						- $\cos(\lambda 2 \pi t)$
							- periodo $\frac{\cancel{2\pi}}{\cancel{2\pi}\lambda} = \frac{1}{\lambda}$
							- frequenza $\lambda$
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
		- The term [sinusoid](https://en.wiktionary.org/wiki/sinusoid) describes any wave with characteristics of a sine wave. Thus, a [cosine](https://en.wikipedia.org/wiki/Cosine) wave is also said to be *sinusoidal*, because 
		    
		      
		        
		        
		      
		      
		    
		  ![{\displaystyle \cos(x)=\sin(x+\pi /2)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e8ededc7e5b7f6486fb42d760a547bb9e6e19e25), which is also a sine wave with a phase-shift of *π*/2 [radians](https://en.wikipedia.org/wiki/Radian). Because of this [head start](https://en.wikipedia.org/wiki/Head_start_(positioning)), it is often said that the cosine function *leads* the sine function or the sine *lags* the cosine. The term *sinusoidal* thereby collectively refers to both sine waves and cosine waves with any phase offset.