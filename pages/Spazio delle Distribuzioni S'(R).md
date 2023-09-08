# Spazio delle distribuzioni
	- Per rappresentare fenomeni di tipo "impulsivo" (es. una massa o carica elettrica concentrate in un punto, un urto, un'esplosione, ecc.) le funzioni non sono sufficienti.
	- Siano $ϕ(t) \ge 0$ e che rappresentino la densità di carica lungo i punti $t$ di un filo illimitato coincidente con l'asse delle ascisse $\R_t$.
	- Se la carica totale è 1 avremo:
		- $$1 = \int_{-∞}^{+∞}ϕ(t)\,dt$$
		- Immaginiamo ora che la carica si distribuisca secondo densità $ϕ_n(t)$, con $n = 1,2,3,…$, che si accumulano sempre più nel punto $t = 0$, come da disegno:
			- ((64fb2882-fd36-4d9d-935f-0b2b20bb3f73))
	- Il fatto che la carica resta invariata si esprime con:
		- $$∫_{-∞}^{+∞}ϕ_n(t)\,dt = 1\quad∀\,n\in \N$$
	- Al limite avremo una distribuzione di carica in cui tutta la carica è concentrata in $t = 0$. Chiamiamo $δ(t)$ questa distribuzione (ideale) di carica. Per la distribuzione $δ(t)$ dovrà dunque valere:
		- $$
		  δ(t) = \begin{cases}
		  0&\text{per }t ≠ 0\\
		  +∞&\text{per }t = 0\\
		  \end{cases}
		  $$
	- Ma anche, in senso opportuno, $\int_{-∞}^{+∞}ϕ(t)\,dt = 1$, e quindi $δ(t)$ non rappresenta la distribuzione nulla di carica $ϕ(t) = 0$.
	- Tuttavia $δ(t)$ differisce dalla funzione nulla solo in $t=0$, insieme di misura nulla, per cui se fosse una funzione di $L^1(\R)$,  $L^2(\R)$ o $L^∞(\R)$ dovrebbe essere identificata con $ϕ(t) = 0$.
	- Ciò mostra, intuitivamente, che lo strumento matematico usato per una distribuzione di carica $δ(t)$ concentrata in $t=0$ non può essere una funzione.
- Rappresentiamo graficamente la distribuzione $δ(t)$ con una "freccia" centrata in $t=0$:
-
- Vengono definite le sue traslate $δ_a(t)$ di parametro $a \in \R$ come distribuzioni concentrate nei punti $a \in \R$, e rappresentate da "frecce" centrate in $a \in \R$:
- Scriveremo anche $δ_a(t) = (τ_aδ)(t)$ usando lo stesso simbolo $τ_a$ dell'operatore di traslazione già usato per funzioni.
- Si tratta ora di trovare uno spazio che contenga sia i segnali rappresentati da funzioni di $\L[\R]1, \L[\R]2$$ o $\Li[\R]$, sia quelli rappresentati da distribuzioni $δ_a$o
- Lo spazio che soddisfa queste esigenze è lo spazio $S'(\R)$ delle **distribuzioni temperate**.
- Come oggetti matematici gli elementi di $S'(\R)$, cioè le distribuzioni temperate, sono "funzionali lineari continui".
- $S'(\R)$ contiene:
	- $L^1(\R)$, $L^2(\R)$, $L^∞(\R)$ (e quindi tutte le funzioni costanti)
	- tutte le distribuzioni $δ_a$ con $a \in \R$
- Gli elementi di $S'(\R)$ si possono considerare come limiti in senso opportuno di successioni di funzioni.
- Si pensi ad es. a $δ(t)$ come limite per $n \rightarrow ∞$ (in senso opportuno) della successione $ϕ(n)$ descritta in precedenza.
- Si possono estendere a $S'(\R)$ essenzialmente tutte le operazioni definite su funzioni, in particolare:
	- somma di funzioni
	- prodotto di funzioni per una costante
	- moltiplicazione puntuale di funzioni (sotto opportune ipotesi)
	- traslazione $τ_a$ con $a \in \R$
	- modulazione $\mu_b$ (ovvero prodotto per la funzione $e^{2πibt}$)
		- $\mu_b = f(t) \rightarrow \mu_bf(t) = f(t) e^{2πibt}$
	- riflessione, ovvero l'operatore che su funzioni agisce come $\tilde{f}(t) = f(-t)$
		- in particolare vale la formula $\tildeδ_a = δ_{-a}$, e quindi $\tildeδ = δ$ per $a = 0$