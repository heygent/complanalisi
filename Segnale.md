---
tag: flashcards/complanalisi
---
# Definizione

Funzione matematica sul tempo.
$$x = x(t)$$
![[Esempio Segnale.excalidraw | center]]

Ci sono diversi modi di pensare a un segnale.


Può essere modellato:
- **deterministicamente**
    - il punto di vista deterministico è l'unico usato qui.
- **statisticamente**

Il segnale può essere:
- **analogico**: la variabile $x = x(t)$ con $t \in \mathbb{R}$ è continua
- **discreto**
    - la variabile $x = x_n$ con $n \in \mathbb{N}$ è discreta
    - un segnale discreto è molto spesso risultato del *campionamento* (o *discretizzazione*) di un segnale analogico
    
## Quantizzazione

I valori di un segnale $x = x(t)$ (numeri esattamente reali o complessi) vengono memorizzati in qualche forma finita, ad esempio come multiplo di una quantità elementare $q$ .
necessario per l'elaborazione di calcolatori

**Segnale digitale**::segnale discreto quantizzato

- # Esempi
	- Segnale acustico
		- variazione della pressione atmosferica al variare del tempo
# Segnali elementari

## Funzione Heaviside 
$$
u(t) = \begin{cases}
0 & \text{se } t < 0 \\
1 & \text{se } t > 0
\end{cases}
$$		- Funzione caratteristica della semiretta positiva, con la differenza che resta indefinita su 0.

O funzione segno indefinita su 0.

## Funzione caratteristica
		-
$$\chi_A(x) = \begin{cases}
		  1 & \text{se } x \in A \\
		  0 & \text{se } x \notin A
		  \end{cases}$$	- ## Finestra rettangolare 
		-
$$r(t) = \begin{cases}
		  1 & \text{se } |t| < a \\
		  0 & \text{se } |t| > a
		  \end{cases}$$			- Funzione caratteristica dell'intervallo $(-a, a)$
				-
	- ## Segnale puro sinusoidale o monocromatico 
		-
$$x(t) = \alpha \cos(\omega t + \varphi) + c$$			- Il termine sinusoide descrive qualunque onda con le caratteristiche di un onda seno.
				- Anche l'onda coseno è detta sinusoidale, dato che $\cos(x)=\sin(x+\pi/2)$
			-
			  <iframe src="https://www.desmos.com/calculator/jx372jiems?embed" width="500" height="300" style="border: 1px solid #ccc" frameborder=0></iframe>
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
				-
$$\begin{aligned}
				  z(t) &= \alpha e^{i(\omega t + \varphi)} \\
				  &= \alpha(\cos(\omega t + \varphi) + i \sin(\omega t + \varphi))
				  \end{aligned}$$				- Molto comoda in molte situazioni (es. elettronica)
				- Più difficile da rappresentare
			-