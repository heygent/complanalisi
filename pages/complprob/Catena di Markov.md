tags:: complprob
alias:: Processo di Markov

- ((637e5388-fc61-45f1-ba74-6dd3bfc9efd7))
- ![complprob-lav-5.pdf](../assets/complprob-lav-5_1669321347044_0.pdf)
- ## [[Distribuzione Congiunta]] dei valori precedenti di un [[Processo stocastico]]
	- Problema: trovare $P(X_n = i)$ (la probabilità che il processo sia allo stato $i$ al tempo $n$)
		- Es. il valore di un'azione tra 30 giorni
	- Ci si aspetta che il valore di $X_n$ dipende dal valore dei tempi precedenti.
	- Per descrivere $\{X_{n \ge 0}\}$ dovrei conoscere:
		- **Distribuzione congiunta dei valori precedenti**
		  id:: 63cec086-77e8-43ec-abb2-2e38590eee2d
			- id:: b59bacc4-cfce-4d5b-84e7-d863ba68d834
			  $$P(X_0 = i_0, X_1 = i_1, \ldots, X_n = i_n)\,\,\forall \,n$$
		- Generalmente molto difficile da conoscere, tranne nel caso in cui le $\{X_i\}$ sono indipendenti:
			- $$P(X_0 = i_0, \ldots, X_n = i_n) = \prod_{j=0}^n P(X_j = i_j)$$
	- Dire che quello che è successo ieri non influenza in alcun modo quello che succede oggi semplifica troppo.
	- Invece di introdurre indipendenza totale, si introduce un'indipendenza condizionata:
		- ## Proprietà di Markov #card
		  card-last-score:: 3
		  card-repeats:: 2
		  card-next-schedule:: 2022-02-11T15:25:33.192Z
		  card-last-interval:: 4
		  id:: 63c448c6-475c-48e3-a3f9-ddd9a7c2d5ca
		  card-ease-factor:: 2.46
		  card-last-reviewed:: 2023-02-07T15:25:33.193Z
			- $$\begin{aligned}
			  &P(X_n = x_n | X_{n-1} = x_{n-1}, \ldots, X_i = x_i) = \\
			  &P(X_n = x_n | X_{n-1} = x_{n-1})
			  \end{aligned}$$
			- Intuitivamente, *il futuro è indipendente dal passato se conosco il presente*.
- # Definizione #card
  card-last-interval:: -1
  card-repeats:: 1
  card-ease-factor:: 2.22
  card-next-schedule:: 2023-02-08T23:00:00.000Z
  card-last-reviewed:: 2023-02-08T07:37:52.894Z
  card-last-score:: 1
	- Si dice catena di Markov un [[Processo stocastico]] a ((63ce922f-9da9-46d4-887c-c385310a7887)) che gode della ((63c448c6-475c-48e3-a3f9-ddd9a7c2d5ca))
- # Processo temporalmente omogeneo #card
  id:: 63e2c1cd-f770-4cb8-8e15-3fa4a50f55f5
  card-last-interval:: -1
  card-repeats:: 1
  card-ease-factor:: 2.5
  card-next-schedule:: 2023-02-08T23:00:00.000Z
  card-last-reviewed:: 2023-02-08T07:35:04.791Z
  card-last-score:: 1
	- Si osservi che:
		- $$P(X_n = j | X_{n-1} = i) = p_{ij}(n)$$
	- Ovvero, la probabilità di passare da uno stato $i$ a uno stato $j$ quando si applica la proprietà di Markov è una quantità che dipende dagli stati $i$ e $j$ e dal tempo $n$.
	- Si parla di **processo temporalmente omogeneo** quando:
		- $$P(X_n = j | X_{n-1} = i) = p_{ij}$$
	- Ovvero, la probabilità di passare da uno stato $i$ a $j$ non dipende dal tempo.
		- tutte le $X_n$ seguono la stessa legge di probabilità a prescindere dal tempo.
	- Si noti che: #.ol
		- $p_{ij} \ge 0$
		- $\sum_j p_{ij} = 1$
	- ### Matrice di transizione
		- Gli elementi $p_{ij}$ possono essere disposti in una matrice $P$ detta matrice di transizione.
			- $$
			  P = \begin{bmatrix}
			  p_{00} & p_{01} & p_{02} & \cdots \\
			  p_{10} & p_{11} & p_{12} & \cdots \\
			  \vdots & \vdots & \vdots & \cdots \\
			  p_{i0} & p_{i1} & p_{i2} & \cdots \\
			  \vdots & \vdots & \vdots & \ddots
			  \end{bmatrix}
			  $$
- # Teorema delle catene temporalmente omogenee #card
  card-last-score:: 3
  card-repeats:: 2
  card-next-schedule:: 2022-02-11T20:01:03.729Z
  card-last-interval:: 4
  id:: 63cc502f-cf0f-4113-88bc-233053cfa25f
  card-ease-factor:: 2.36
  card-last-reviewed:: 2023-02-07T20:01:03.729Z
	- Per una catena di Markov posso scrivere tutte le distribuzioni finito-dimensionali:
		- {{embed ((63cec086-77e8-43ec-abb2-2e38590eee2d))}}
		- Se conosco $\forall \, n$:
			- $P$ matrice di transizione
			- $P(X_0 = i_0)$ distribuzione iniziale
	- #### Dimostrazione per induzione
		- $n = 1$
			- $$\begin{aligned}
			  P(X_1 = i_1, X_0 = i_0) = \underbrace{P(X_1 = i_1 | X_0 = i_0)}_{P_{i_0 i_1}}\underbrace{P(X_0 = i_0)}_\text{distribuzione iniziale}
			  \end{aligned}$$
		- Ammesso vero per $n - 1$ si mostra vero per $n$:
			- $$
			  \begin{aligned}
			  &\phantom{=}P(X_n = i_n, X_{n-1} = i_{n-1}, \ldots, X_0 = i_0)
			  \\ &= P(X_n = i_n | X_{n-1} = i_{n-1}, \ldots, X_0 = i_0) P(X_{n-1} = i_{n-1}, \ldots, X_0 = i_0)
			  \\ &= \underbrace{P(X_n = i_n | X_{n-1} = i_{n-1})}_{\text{per proprietà di Markov } P_{i_{n-1}i_n}} \underbrace{P(X_{n-1} = i_{n-1}, \ldots, X_0 = i_0)}_\text{vero per ipotesi induttiva}
			  \\ &= P_{i_{n-1} i_n} P_{i_{n-2} i_{n-1}} \ldots P_{i_0 i_1} P(X_0 = i_0)
			  \end{aligned}
			  $$
- # Esempi di Catene di Markov
  id:: 63cec60f-087c-40b4-99c5-abbabcfb6275
  collapsed:: true
	- ## Previsioni del tempo
		- | oggi | domani | $P$ |
		  | ---  | ---    | --- |
		  | piove | piove | $\alpha$ |
		  | non piove | piove | $\beta$ |
		- $$P = \begin{bmatrix}
		  \alpha & 1 - \alpha \\
		  \beta & 1 - \beta
		  \end{bmatrix}$$
			- $\{0\}$ pioggia
			- $\{1\}$ no pioggia
	- ## Sistema di comunicazione
		- Un sistema di comunicazione trasmette dei bit. Ogni bit trasmesso attraversa $k$ stadi per arrivare allo strumento di lettura. In ogni stadio il bit può essere distorto con probabilità $(1 - p)$.
		- Sia $X_n$ il bit che entra nello stadio $n$.
		- Spazio degli stati $S = \{0, 1\}$
		- $$P = \begin{bmatrix}p & 1-p \\ 1 -p & p \end{bmatrix}$$
	- ## Cammino casuale
	  id:: 63c46d58-6599-4fd0-89d5-e8c223217adc
		- Catena di Markov con stati $0, \pm 1, \pm 2, \ldots$
		- $P_{i,i+1} = p = 1 - P_{i,i-1}$
			- $i = 0, \pm 1, \pm 2, \ldots$
		- $P_{ij} = 0$
			- $j\neq i \pm 1$
		- La matrice di transizione è infinita, con zeri in tutte le posizioni tranne quelle adiacenti alla diagonale.
			- $$P = \begin{vmatrix}
			  \ddots & \ddots & \ddots & \cdots & \cdots & \cdots & \cdots \\
			  \vdots & 1 - p & 0 & p & \cdots & \cdots & \cdots \\
			  \vdots & \vdots & 1 - p & 0 & p & \cdots & \cdots \\
			  \vdots & \vdots & \vdots & 1 - p & 0 & p & \cdots \\
			  \vdots & \vdots & \vdots & \vdots & \ddots & \ddots & \ddots \\
			  \end{vmatrix}$$
				-
			- ((63ced1e9-1d2b-4931-9462-d578d90e1444))
		- Si può creare una versione simile con dei limiti, ad esempio un giocatore ha a disposizione un capitale iniziale che investe nel corso del gioco. Se arriva a una certa somma (es. 100) o se va a 0, il gioco finisce. In questo caso, la matrice ha forma del tipo:
			- $$P = \begin{bmatrix}
			   1 & 0 & 0 & 0 & 0 \\
			   1 - p & 0 & p & 0 & 0 \\
			   0 & 1 - p & 0 & p &0 \\
			  0 & 0 & 1 - p & 0 & p \\
			  0 & 0 & 0 & 0 & 1 \\
			  \end{bmatrix}$$
- # Matrice di transizione a $n$ passi #card
  id:: 63d5783b-1810-4a27-85c7-c42369d89ce2
  card-last-interval:: -1
  card-repeats:: 1
  card-ease-factor:: 2.36
  card-next-schedule:: 2023-02-08T23:00:00.000Z
  card-last-reviewed:: 2023-02-08T02:02:49.169Z
  card-last-score:: 1
	- Se la catena è temporalmente omogenea:
		- $$\begin{aligned}
		  P_{ij}^{(n)} &= P(X_{n+m} = j | X_m = i) \\
		  &= P(X_n = j | X_0 = i)
		  \end{aligned}$$
			- $n \ge 0,\,\, i,j \in \mathbb{N}$
	- Conoscere matrice di transizione a un passo e distribuzione iniziale bastano per descrivere completamente la catena di Markov.
	- È possibile mettere in relazione $P^{(n)}$ matrice a $n$ passi con $P$ matrice a un passo.
	- ## Teorema delle catene temporalmente omogenee
		- Per una catena di Markov a tempo omogeneo si ha:
			- $$P_{ij}^{(n+m)} = \sum_k P_{ik}^{(n)} P_{kj}^{(m)}$$
		- ## Dimostrazione
			- $$\begin{aligned}
			  P_{ij}^{(n+m)} &= P(X_{n+m} = j | X_0 = i) \\
			  &= \underbrace{\sum_k P(X_{n+m} = j, X_n = k | X_0 = i)}_\text{Teorema delle probabilità totali} \\
			  &= \sum_k P(X_{n+m} = j | X_n = k, X_0 = i)P(X_n = k | X_0 = i) \\
			  &= \sum_k \underbrace{P(X_{n+m} = j | X_n = k)}_\text{Proprietà di Markov} P(X_n = k | X_0 = i)\\
			  &= \sum_k \underbrace{P(X_m = j | X_0 = k)}_\text{Per catena temp. omogenea} P(X_n = k | X_0 = i)\\
			  &= \sum_k P_{kj}^{(m)}P_{ik}^{(n)}
			  \end{aligned}$$
			- Che corrisponde alle operazioni da fare nel prodotto tra matrici.
	- ## Equazione di Chapman-Kolmogorov
	  card-last-interval:: 4
	  card-repeats:: 1
	  card-ease-factor:: 2.6
	  card-next-schedule:: 2022-02-11T14:15:57.667Z
	  card-last-reviewed:: 2023-02-07T14:15:57.667Z
	  card-last-score:: 5
		- $$P^{(n+m)} = P^{(m)} P^{(n)}$$
		- Da notare anche che:
			- $$P_{ij}^{(1)} = P(X_1 = j | X_0 = i) = P_{ij}$$
			- è la matrice di transizione del processo.
		- Se scelgo $m = 1, n = 1$:
			- $$P^{(2)} = PP = P^2$$
			- La matrice di transizione a due passi coincide col quadrato della matrice di transizione.
		- Se scelgo $n = 2, m = 1$:
			- $$P^{(3)} = P^{(2)}P = P^2P = P^3$$
		- Ragionando per induzione, si può arrivare a:
			- $$P^{(n)} = P^n$$
		- La matrice di transizione a $n$ passi è uguale alla matrice di transizione elevata alla potenza $n$-esima.
		- Le potenze di matrici per $n$ grande possono essere problematiche, per esigenze computazionali e cancellazione catastrofica.
	- ### Libro
	  card-last-score:: 1
	  card-repeats:: 1
	  card-next-schedule:: 2022-01-21T23:00:00.000Z
	  card-last-interval:: -1
	  id:: 63c03f32-a428-463e-8bf5-b2cdd30083dd
	  card-ease-factor:: 2.5
	  card-last-reviewed:: 2023-01-21T12:50:22.821Z
	  collapsed:: true
		- ((637f3791-defc-4dbb-b489-61d4ad60f97c))
		- Ci interessa:
			- $$P(X_n = j | X_0 = i)$$
			- Non solo sul caso $n = 1$, ma anche per transizioni più lunghe.
		- Diciamo matrice di transizione a $n$ passi
		- La probabilità che un processo nello stato $i$ si trovi nello stato $j$ dopo $n$ transizioni è:
			- $$P^n_{ij} = P(X_{n+k} = j | X_k = i) \quad\quad n \ge 0, \quad i,j \ge 0$$
		- ## Probabilità di transizione a $n$ passi
		  id:: 63c46c03-8d83-4b3e-a24c-8378e23ce19d
			- Le equazioni di Chapman-Kolmogorov danno un metodo per computare queste probabilità di transizione a $n$ passi. Le equazioni sono:
				- id:: 637f383a-7cf4-4d7a-8f45-192579bc48ae
				  $$P^{n+m}_{ij} = \sum_{k} P^n_{ik} P^m_{kj} \quad \forall n, m \ge 0, \quad \forall i, j$$
					- $P^n_{ik} P^m_{kj}$ rappresenta la probabilità, partendo dallo stato $i$, di arrivare allo stato $j$ in $n+m$ transizioni attraverso un cammino che passa per lo stato $k$ all'$n$-esima transizione.
					- Per cui, sommare su tutti gli stati intermedi $k$ produce la probabilità che il processo sia nello stato $j$ dopo $n+m$ transizioni.
		- ## Teorema di Chapman-Kolmogorov
		  id:: 63c469fc-e571-4ef9-a17b-53be353fcb09
			- Se $P^{(n)}$ denota la matrice delle transizioni $P^n_{ij}$, allora [l'equazione](((637f383a-7cf4-4d7a-8f45-192579bc48ae))) asserisce che:
				- $P^{(n+m)} = P^{(n)} \cdot P^{(m)}$
					- Dove $\cdot$ rappresenta il prodotto matriciale.
				- $P^{(2)} = P^{(1+1)} = P \cdot P = P^2$
				- $P^{(n)} = P^{(n - 1 + 1)} = P^{n-1} \cdot P = P^n$
					- Ovvero, la matrice delle transizioni dopo $n$ passi può essere ottenuta moltiplicando la matrice $P$ per se stessa $n$ volte.
- # Classificazione degli stati
  id:: 63c03f32-1e0d-4f48-8da7-5a2815da2196
	- ((637f50f9-31f2-42a5-8a95-4e4b6530260d))
	- ## Stati accessibili #card
	  id:: 637f3cd1-b875-418f-b286-e27df4219b01
	  card-last-interval:: 4
	  card-repeats:: 2
	  card-ease-factor:: 2.46
	  card-next-schedule:: 2022-02-11T15:19:15.115Z
	  card-last-reviewed:: 2023-02-07T15:19:15.116Z
	  card-last-score:: 3
		- Lo stato $j$ è accessibile da $i$ se $P^n_{ij} > 0$ per qualche $n \ge 0$.
		- È possibile che partendo da $i$ il processo entri nello stato $j$.
	- ## Stati comunicanti #card
	  id:: 63c03f32-b4b1-4e7b-9b7e-1a7931ddf98f
	  card-last-interval:: 10.8
	  card-repeats:: 3
	  card-ease-factor:: 2.7
	  card-next-schedule:: 2022-02-18T14:24:24.095Z
	  card-last-reviewed:: 2023-02-07T19:24:24.096Z
	  card-last-score:: 5
		- [stati accessibili](((637f3cd1-b875-418f-b286-e27df4219b01))) reciprocamente
		- $i \leftrightarrow j$
		- Ogni stato per definizione comunica con se stesso:
			- $$P^0_{ii} = P(X_0=i | X_0 = i) = 1$$
		- ### Proprietà di comunicazione #.ol
		  id:: 63c03f32-9ee0-4a21-bb96-01ae901d8d23
			- Lo stato $i$ comunica con lo stato $i$, $\forall i \ge 0$
			- Se $i \leftrightarrow j$, allora $j \leftrightarrow i$
			- Se $i \leftrightarrow j$, e $j \leftrightarrow k$, allora $i \leftrightarrow k$
		- ### Classe
		  id:: 63c03f32-0936-4bc8-91ce-34ecb9057989
			- Due stati che comunicano si dicono appartenenti alla stessa classe.
			- Ogni coppia di classi può essere o identica o disgiunta.
				- In altre parole, il concetto di comunicazione divide lo spazio in un certo numero di classi separate
			- #### Catena irriducibile
			  id:: 637f4031-328c-489f-9957-9ecd95c131d9
				- Catena con una sola classe, ovvero tutti gli stati comunicano con tutti gli altri.
	- ## Stati ricorrenti e transienti #card
	  id:: 63c03f32-d63a-4e2d-a02e-4b1975ec83c3
	  card-last-interval:: 8.88
	  card-repeats:: 3
	  card-ease-factor:: 2.22
	  card-next-schedule:: 2022-02-16T16:45:28.439Z
	  card-last-reviewed:: 2023-02-07T19:45:28.439Z
	  card-last-score:: 3
		- Per un qualunque stato $i$ sia $f_i$ la probabilità che, partendo da $i$, si rientri nello stato $i$.
		- **stato ricorrente**
			- $f_i = 1$
		- **stato transiente**
			- $f_i < 1$
		- Si supponga che un processo inizi nello stato $i$ e che $i$ sia ricorrente.
			- Con probabilità 1 il processo rientrerà nello stato $i$.
			- Per definizione di catena di Markov, il processo ricomincerà quando rientra nello stato $i$
			- La ripetizione continua di quest'argomentazione porta alla conclusione che se lo stato $i$ è ricorrente allora, partendo dallo stato $i$, *il processo vi rientrerà infinite volte.*
		- Dall'altra parte, si supponga che $i$ sia transiente
			- Ogni volta che il processo entra nello stato $i$ esisterà una probabilità positiva, $1 - f_i$, che il processo non rientri più in quello stato.
			- Per cui, partendo da $i$, la probabilità che il processo si trovi nello stato $i$ per esattamente $n$ periodi di tempo è uguale a:
				- $$f_i^{n-1} \cdot (1-f_i) \quad n \ge 1$$
			- In altre parole, se lo stato è stato è transiente allora, partendo dallo stato $i$, il numero di periodi di tempo in cui il processo si troverà nello stato $i$ ha [[distribuzione geometrica]] con media finita $\frac{1}{1-f_i}$
		- Dai due paragrafi precedenti, segue che lo stato $i$ è ricorrente se e solo se, partendo dallo stato $i$, il numero atteso di periodi di tempo in cui il processo è nello stato $i$ è infinito.
		- Sia:
			- $$I_n = \begin{cases} 1& \text{se } X_n = i \\ 0& \text{se } X_n \neq i \end{cases}$$
			- Allora $\sum_{n=0}^\infty I_n$ rappresenta il numero di periodi in cui il processo si trova nello stato $i$.
			- $$
			  \begin{aligned}
			  \mathbb{E} \left[ \sum_{n=0}^\infty I_n|X_0 = i \right] &= \sum_{n=0}^\infty \mathbb{E}[I_n|X_0 = i] \\
			  &= \sum_{n=0}^\infty P(X_n = i|X_0=i) \\
			  &= \sum_{n=0}^\infty P^n_{ii} \\
			  \end{aligned}
			  $$
			- Per cui lo stato $i$ è:
				- *ricorrente* se:
					- $$\sum_{n=1}^\infty P_{ii}^n = \infty$$
				- *transiente* se:
					- $$\sum_{n=1}^\infty P_{ii}^n < \infty$$
		- **Almeno uno stato in una catena di Markov deve essere ricorrente**
			- Uno stato transiente verrà visitato un numero finito di volte.
			- Se tutti gli stati fossero transienti:
				- per ogni stato esiste una quantità finita di tempo dopo cui esso non viene più visitato
				- dopo una quantità finita di tempo, nessuno stato verrebbe più visitato
				- questo non è possibile dato che il processo si deve sempre trovare in un qualche stato, per cui si arriva a una contraddizione.
		- La ricorrenza è una proprietà della ((63c03f32-0936-4bc8-91ce-34ecb9057989))
		  id:: 63aacc4d-19b4-4e0c-8056-c512c05f9434
			- Se lo stato $i$ è ricorrente e $i$ comunica con $j$, allora $j$ è ricorrente.
			- ((637f57db-e5a9-4a62-8aec-53d985f9b3f4))
	- ## Positivo e nullo ricorrenza #card
	  card-last-interval:: 4
	  card-repeats:: 2
	  card-ease-factor:: 2.22
	  card-next-schedule:: 2022-02-11T15:12:54.879Z
	  card-last-reviewed:: 2023-02-07T15:12:54.880Z
	  card-last-score:: 3
	  id:: 63d5783b-6e0d-4f48-a1b8-0b3406e372c9
		- Quando una catena di Markov ha un numero infinito (ma contabile) di stati, è necessario distinguere tra due tipi di stati: *positivo* ricorrenti e *nullo* ricorrenti.
		- Sia $i$ uno stato ricorrente. Assumendo $X_0 = i$, sia $R_i$ il numero di transizioni necessarie per tornare allo stato $i$, ovvero
			- $$R_i = \min\{n \ge 1 : X_n = i\}$$
				- Se $r_i = \mathbb{E}[R_i|X_0 = i] < \infty$, allora $i$ è detto **positivo ricorrente**.
				- Se $\mathbb{E}[R_i|X_0 = i] = \infty$, allora $i$ è detto **nullo ricorrente**.
- ## Stato periodico #card
  id:: 63c470ff-8efa-44bd-8788-8e634e0f0084
  card-last-interval:: 8.32
  card-repeats:: 3
  card-ease-factor:: 2.08
  card-next-schedule:: 2022-02-16T03:27:02.050Z
  card-last-reviewed:: 2023-02-07T20:27:02.051Z
  card-last-score:: 3
	- Lo stato $i$ si dice **periodico** di periodo $d$ se
	  id:: 63d5783b-3ba2-4c2e-a499-d9138ca4708c
		- $$P^n_{ii} = 0$$
	- quando $n$ non è divisibile per $d$ e $d$ è il più grande intero con questa proprietà.
	- Cioè $d$ è:
		- $$\text{MCD}\,\,\{n: P_{ii}^n > 0\}$$
	- Se $d$ = 1 lo stato si dice **aperiodico**.
	- La periodicità è una proprietà della ((63c03f32-0936-4bc8-91ce-34ecb9057989)) .
- ## Stato ergodico #card
  id:: 63c4760a-287b-4a1b-a245-a58450f327f1
  card-last-interval:: -1
  card-repeats:: 1
  card-ease-factor:: 2.36
  card-next-schedule:: 2023-02-08T23:00:00.000Z
  card-last-reviewed:: 2023-02-08T02:03:41.055Z
  card-last-score:: 1
	- Uno stato [aperiodico](((63c470ff-8efa-44bd-8788-8e634e0f0084))) e [positivo ricorrente](((63d5783b-6e0d-4f48-a1b8-0b3406e372c9))) si dice ergodico.
	- Una catena con tutti gli stati ergodici si dice ergodica.
	- L'ergodicità della catena è ciò che definisce l'esistenza della [distribuzione limite](((63d5783b-d6f3-4a34-a106-712e2b007fb1))).
- # Distribuzione limite, stazionaria e invariante
  card-last-score:: 3
  card-repeats:: 1
  card-next-schedule:: 2022-01-20T19:51:50.350Z
  card-last-interval:: 4
  id:: 63d5783b-d6f3-4a34-a106-712e2b007fb1
  card-ease-factor:: 2.36
  card-last-reviewed:: 2023-01-16T19:51:50.351Z
	- ## Distribuzione limite #card
	  id:: 63c533d7-f88b-45a1-bcbc-fbe34d8d62b7
	  card-last-interval:: -1
	  card-repeats:: 1
	  card-ease-factor:: 2.5
	  card-next-schedule:: 2023-02-08T23:00:00.000Z
	  card-last-reviewed:: 2023-02-07T23:08:12.274Z
	  card-last-score:: 1
		- In una catena di Markov irriducibile ed ergodica:
			- Esiste ed è indipendente da $i$:
			  logseq.order-list-type:: number
				- $$\lim_{n\rightarrow\infty} P_{ij}^n = \pi_j$$
			- $\pi_j$ è l'unica soluzione non negativa del sistema:
			  logseq.order-list-type:: number
				- id:: 63d5783b-9aef-4f59-81b1-6406350108b1
				  $$\begin{dcases}
				  \pi_j = \sum_{i} \pi_i P_{ij} \\
				  \sum_{i} \pi_i = 1
				  \end{dcases}$$
		- #### Dimostrazione
			- Ammetto che le $\{\pi_j\}$ esistano e siano indipendenti da $i$.
			- $$\begin{aligned}
			  P(X_{n+1} = j) &= \sum_i \underbrace{P(X_{n+1} = j | X_n = i)}_{P_{ij}} P(X_n = i) \\
			  P(X_{n+1} = j) &= \sum_i P_{ij} P(X_n = i) \\
			  \underbrace{\lim_{n \rightarrow \infty} P(X_{n+1} = j)}_{\pi_j} &= \lim_{n \rightarrow \infty} \sum_i P_{ij} P(X_n = i) \\
			  \pi_j &= \sum_i P_{ij} \underbrace{\lim_{n\rightarrow \infty} P(X_n = i)}_{\pi_i} \\
			  \pi_j &= \sum_i P_{ij} \pi_i
			  \end{aligned}$$
			- Affinché le $\{ \pi_j \}$ siano una distribuzione, $\sum_j \pi_j = 1$
			- Affinché le $\{ \pi_j \}$ siano probabilità, $\pi_j \ge 0 \; \forall \,j$
		- Se $i$ è transiente
			- $$\lim_{n\rightarrow \infty} P^n_{ji} = \pi_i = 0$$
		- L'irriducibilità è richiesta perché:
			- Se la catena è aperiodica, positivo ricorrente ma riducibile, il comportamento per $n \rightarrow \infty$ dipende dalla distribuzione iniziale.
	- ## Distribuzione stazionaria #card
	  card-last-interval:: -1
	  card-repeats:: 1
	  card-ease-factor:: 2.36
	  card-next-schedule:: 2023-02-08T23:00:00.000Z
	  card-last-reviewed:: 2023-02-08T02:10:32.779Z
	  card-last-score:: 1
		- Sia $\{\tilde{\pi}_j\}$ una distribuzione iniziale.
			- Se ai passi successivi la distribuzione è ancora $\{\tilde{\pi}_j\}$, allora $\tilde{\pi}_j$ si dice distribuzione stazionaria.
			- Se parto da uno stato di equilibrio, nei passi successivi ritrovo la stessa situazione.
			- Non è un concetto asintotico, non si parla di quando $n \rightarrow \infty$ ma di una situazione che si forma relativamente rapidamente.
		- Se la catena è irriducibile ed ergodica, esiste una sola distribuzione stazionaria che coincide con la distribuzione limite.
			- Ad esempio, se ho due classi, potrei avere una distribuzione stazionaria quando inizio da uno stato in una certa classe diversa da quella che corrisponde allo stato in un'altra classe.
	- ## Distribuzione invariante #card
	  card-last-interval:: -1
	  card-repeats:: 1
	  card-ease-factor:: 2.36
	  card-next-schedule:: 2023-02-08T23:00:00.000Z
	  card-last-reviewed:: 2023-02-08T02:25:08.534Z
	  card-last-score:: 1
		- La periodicità è richiesta perché:
			- Se la catena è periodica, non può avere una distribuzione stazionaria.
		- Si consideri la catena con:
			- $$P = \begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}$$
			- In questo caso:
				- $$\begin{aligned}
				  &P(X_{2n} = 1 | X_0 = 1) &= 1 \\
				  &P(X_{2n+1} = 1 | X_0 = 1) &= 0
				  \end{aligned}$$
			- La catena ha periodo 2.
			- Tuttavia se si considera il sistema:
				- {{embed ((63d5783b-9aef-4f59-81b1-6406350108b1))}}
				- Questo avrà soluzione $\pi = (\pi_0, \pi_1) = (\frac{1}{2}, \frac{1}{2})$
				- Questa soluzione non può assumere significato di limite, né di distribuzione stazionaria.
				- Questa soluzione verrà detta **distribuzione invariante**.
				- Può essere letta come la proporzione di tempo che il processo trascorre in un certo stato.
	- ## Teorema ergodico #card
	  card-last-interval:: -1
	  card-repeats:: 1
	  card-ease-factor:: 2.36
	  card-next-schedule:: 2023-02-08T23:00:00.000Z
	  card-last-reviewed:: 2023-02-08T02:21:54.011Z
	  card-last-score:: 1
		- Sia $m_{jj}$ il numero atteso di transizioni affinché la catena di Markov originata in $j$ torni in $j$.
			- $$m_{jj} = \mathbb{E}[T_j | X_0 = j]$$
			- Dove $T_j$ è il tempo di ritorno in $j$
		- Se la catena è irriducibile, la media campionaria del numero di visite allo stato $j$ converge quasi certamente (con probabilità 1) a $\frac{1}{m_jj}$.
			- $$\lim_{n\rightarrow\infty} \frac{1}{n} \sum \mathbb{I}_{X_n = j} = \frac{1}{m_{jj}}$$
		- Se la catena è anche positivo ricorrente si ha che:
			- $$\lim_{n\rightarrow\infty} \frac{1}{n} \sum \mathbb{I}_{X_n = j} = \pi_j$$
		- Se la catena è ergodica:
			- $$\pi_j = \frac{1}{m_{jj}}$$