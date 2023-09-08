tags:: complanalisi

- # Spazio vettoriale di funzioni
- Sia $I \subseteq \R$ un intervallo aperto.
- Si consideri l'insieme $F(I)$ delle funzioni $f: I \rightarrow \C$.
- Se nell'insieme $F(I)$ sono definite le operazioni:
	- Somma puntuale
	  logseq.order-list-type:: number
		- $$(f + g)(t) = f(t) + g(t)$$
	- Prodotto per una costante $\lambda \in \C$
	  logseq.order-list-type:: number
		- $$(\lambda f)(t) = \lambda f(t)$$
- Allora $F(I)$ è uno spazio vettoriale.
	- Si definisce per $f \in F(I)$, quando ciò ha senso:
	- $$\|f\|_{L^1(I)} = \int_I |f(t)|\,dt$$
	- $$\|f\|_{L^2(I)} = \left(\int_I |f(t)|^2\,dt\right)^\frac{1}{2}$$
	- $$
	  \begin{aligned}
	  \|f\|_\Li &=  \esssup |f|\\
	  &= \inf\{C\ge 0: |f(t)| \le C \text{ quasi ovunque su }I\}
	  \end{aligned}
	  $$
	- > [!note]
	  Gli integrali qua sono intesi come integrali di Lebegue.
	  Nei casi considerati nel corso possono essere considerati integrali di Riemann, ma è preferibile per teoria generale e rigorosa.
	  La definizione di $\|f\|_{L^\infty(I)}$ generalizza $\sup_{t \in I} |f(t)|$ e coincide con essa quando $f$ è continua.
	  
	  > [!note]
	  $\|f\|_{L^1(I)}, \|f\|_{L^2(I)}, \|f\|_{L^\infty(I)}$ non sono norme.
	  Ad esempio se $I = \R$ e:
	  $$f(t) = \begin{cases}1&\text{per }t=0\\0 &\text{per } t \neq 0\end{cases}$$
	  Si ha $\|f\|_{L^1(I)} = 0, \|f\|_{L^2(I)} = 0, \|f\|_{L^\infty(I)} = 0$ ma $f \neq 0$.
	  
	  Per ovviare all'inconveniente si identificano funzioni coincidenti "quasi ovunque" su $I$, ovvero considero $f = g$ se $f(t) = g(t)$ per "quasi ogni" $t \in I$.
	  
	  "q.o. $t\in I$" significa "ogni $t \in I$" eccetto al più un insieme di misura di Lebesgue nulla.
	  Tutti gli insiemi finiti e numerabili hanno misura di Lebesgue nulla.
	  
	  Ad esempio:
	  
	  $$f(t) = \frac{\sin(t)}{t}\quad\quad g(t) = \begin{cases}\frac{\sin(t)}{t}&t \neq 0\\ 1 & t = 0\end{cases}$$
	  sono considerate uguali perché differiscono solo nell'insieme finito $\{0\}$.
- # Spazi normati
  
  Si pongono:
  
  $$
  \begin{aligned}
  \L1 &= \{f: I \rightarrow \C \,\,|\,\, \|f\|_{L^1(I)} < +\infty \} \\
  \L2 &= \{f: I \rightarrow \C\,\, |\,\, \|f\|_{L^2(I)} < +\infty \} \\
  \Li &= \{f: I \rightarrow \C \,\,|\,\, \|f\|_{L^\infty(I)} < +\infty \} \\
  \end{aligned}
  $$
  sottointendendo l'identificazione tra funzioni q.o. coincidenti.
  
  $(\L1, \norm_\L1),  (\L2, \norm_\L2), (\Li,\norm_\Li)$,
  sono spazi di Banach, ovvero spazi vettoriali normati completi.
  
  Su $\L1, \L2, \Li$ rispettivamente si ha che rispettivamente $\norm_\L1, \norm_\L2, \norm_\Li$ sono norme, e rispetto ad esse una successione è convergente se e solo se è di Cauchy.
- ## Spazio L2
  Più in particolare per $L^2(I)$:
  
  $(\L2, \norm_\L2)$ è uno **spazio di Hilbert**, ovvero la norma $\norm{\L2}$ proviene da un prodotto interno. Precisamente:
  
  $$\|f\|{\L2} = \sqrt{(f, f)_{\L2}}$$
  dove:
  $$(f, g)_{\L2} = \int_I f(t) \overline{g(t)}\,dt$$
  $\forall\,f,g \in \L2$
  
  Ciò permette di definire il concetto di **ortogonalità** come:
  $$f \perp g \text{ se } (f, g)_{\L2} = 0$$
- ### Energia
  Fisicamente $\|f\|_\L2^2$ rappresenta l'energia del segnale $f \in \L2$.
  Un'interpretazione di questo fatto per segnali rappresentati da circuiti elettrici è la seguente.
  
  Siano:
- $I$ corrente (costante)
- $V$ voltaggio (funzione del tempo)
- $R$ resistenza del circuito (funzione del tempo)
  
  Allora:
- $RI = V$ (legge di Ohm)
- $IV = P$ (= potenza)
  
  Se $W$ è il lavoro compiuto, ovvero l'energia trasferita, la sua variazione nel tempo ci dà la potenza:
  
  $$P = \frac{dW}{dt}$$
  L'energia totale sarà allora:
  
  $$
  \begin{aligned}
  E &= W(+\infty) - W(-\infty)\\
  &= \int_{-\infty}^{+\infty} \frac{dW}{dt}\,dt\\
  &= \int_{-\infty}^{+\infty} P(t)\,dt\\
  &= \frac{1}{R}\int_{-\infty}^{+\infty} V^2(t)\,dt\\
  &= \frac{1}{R}\|V\|_\L[\R]2^2
  \end{aligned}
  $$
  Da questo si può giustificare il perché $\norm{\L2}$ rappresenta l'energia del segnale.
- ### Disuguaglianza di Schwartz
  
  $$\int_I |f(t)| |g(t) | \,dt \le \|f\|_\L2 \|g\|{\L2}$$
  Da questa segue che $f, g \in \L2 \Rightarrow fg \in \L1$, dato che:
  
  $$\|fg\|{1} = \int_I|f(t)||g(t)|$$
  Ed è minorato da un numero ben definito.
- ### Base ortonormale
- #### Definizione
  
  Siano $\phi_n \in \L2$ con $n \in \Z$.
  L'insieme di funzioni $\{\phi_n\}_{n \in \Z}$ si dice **base ortonormale** di $\L2$ se:
  
  $$
  (\phi_n, \phi_m)_\L2 = \begin{cases}
  0 & \text{per } n \neq m \\
  1 & \text{per } n = m
  \end{cases}
  \tag{1}
  $$
  $$ 
  \begin{aligned}
  \forall\,f \in \L2: \\
  f = \sum\limits_{n = -\infty}^{+\infty} c_n \phi_n \quad\quad\quad&\text{Serie di Fourier}\\
  \text{dove }\,c_n = (f, \phi_n)_{\L2} \quad\quad\quad&\text{Coefficienti di Fourier}
  \end{aligned}
  \tag{2}
  $$
- #### Note
  
  Per definizione:
  
  $$
  \begin{gathered}
  f = \sum\limits_{-\infty}^{+\infty} c_n \phi_n \\\Updownarrow \\\lim_{N \rightarrow \infty} \left\| f - \sum\limits_{n = -N}^N c_n\phi_n \right\| _{\L2} = 0
  \end{gathered}
  $$
- La definizione è analoga per $n \in \N$ invece che $n \in \Z$.
- La (1) significa che le funzioni $\phi_n$ sono ortogonali a due a due ed hanno $\|\phi_n\|{\L2} = 1$
- ### Uguaglianza di Parseval
  
  Sia $\{\phi_n\}$ con $n \in \Z$ (o $n \in \N$) una base ortonormale di $\L2$. Allora $\forall f \in \L2$ si ha:
  $$\|f\|_\L2^2 = \sum\limits_n |c_n|^2$$
  
  Nel caso particolare $I = \{1,2,3\}$ le funzioni $f: I \rightarrow \R$ coincidono con i vettori dello spazio $\R^3$ e l'uguaglianza di Parseval coincide con il teorema di Pitagora.
  
  $$f: I = \{1,2,3\} \rightarrow \R$$
  $$
  \begin{aligned}
  1 &\rightarrow x(1) = x_1 \\
  2 &\rightarrow x(2) = x_2 \\
  3 &\rightarrow x(3) = x_3 \\
  \end{aligned}
  $$
  Le funzioni in in $I$ possono essere fatte coincidere con un vettore in $\R^3$:
  $x = (x_1, x_2, x_3) \in \R^3$
  $$\|x\|_\L2^2 = \sum\limits_{n=1}^3|c_n|^2 = |x_1|^2 + |x_2|^2 + |x_3|^2$$
  $$
  \begin{aligned}
  \phi_1 &= e_1 = (1, 0, 0) \\
  \phi_2 &= e_2 = (0, 1, 0) \\
  \phi_3 &= e_3 = (0, 0, 1) \\
  \end{aligned}
  $$
  $$x = x_1e_1 + x_2e_2 + x_3e_3$$
  $$
  \begin{aligned}
  x_1 &= (x, e_1) \\
  x_2 &= (x, e_2) \\
  x_3 &= (x, e_3) \\
  \end{aligned}
  $$
  I coefficienti $c_n$ corrispondono con $x_1, x_2, x_3$
  
  Dall'espressione di $f$ tramite la sua serie di Fourier $f = \sum\limits_{n = -\infty}^{+\infty} c_n \phi_n$ si comprende intuitivamente che ogni coefficiente di Fourier $c_n$ indica "quanto" della funzione $\phi_n$ è presente nel segnale $f$. Nei seguenti casi particolari si identificano $\phi_n$ con le frequenze pure.
- ### Base esponenziale di $L^2(0,a)$
  
  Sia $I = (0,a)$ con $a > 0$ fissato.
  
  Pongo:
  $$\lambda = \frac{1}{a}$$
  $$e^n_\lambda(t) = \sqrt\lambda e^{2\pi n \lambda t}$$
  per $n \in \Z$.
- considero frequenze pure multiple della frequenza $λ$
- la radice smorza le oscillazioni in modo tale da avere energia 1.
  
  Allora $\forall n \in \Z: e_\lambda^n \in L^2(0,a)$.
  L'insieme di funzioni $\{e_\lambda^n\}_{n \in \Z}$ è una **base ortonormale** di $L^2(0,a)$.
  
  Dimostrazione
  
  Bisogna provare le due condizioni:
  ![[Spazio di funzioni#Base ortonormale#Definizione]]
  
  Se $n = m$:
  $$
  \begin{aligned}
  (e_\lambda^n, e_\lambda^n)_{\L2} 
  &= ∫_0^{\frac{1}{λ}} e_λ^n(t)\overline{e_λ^n(t)}\\
  &= \lambda\int_0^\frac{1}{\lambda} e^{2\pi i n \lambda t} \cdot e^{-2\pi i n \lambda t}\,dt\\
  &= \lambda \int_0^{\frac{1}{\lambda}} 1\,dt \\
  &= 1
  \end{aligned}
  $$
  Se $n \neq m$:
  $$
  \begin{aligned}
  (e_\lambda^n, e_\lambda^m)_\L2 &= ∫_0^\frac{1}{λ}e_λ^n(t)\overline{e_λ^m(t)}
  \\
  &= \lambda \int_0^\frac{1}{\lambda} e^{2\pi i (n - m) \lambda t}\,dt\\
  &= \lambda \left[ \frac{e^{2\pi i (n - m)\lambda t}}{2\pi i (n-m)\lambda}\right]_0^\frac{1}{\lambda}\\
  &= \lambda\left(\frac{1 - 1}{2\pi i(n - m \lambda)}\right)\\
  &= 0
  \end{aligned}
  $$
- valuto funzione in $t = \frac{1}{λ}$ e $t = 0$ e sottraggo.
- per $t = 0$ la funzione vale 1
- per $t = \frac{1}{λ}$, ottengo $e^{2πi(n - m)}$. Essendo l'esponente un multiplo di $2iπ$, il risultato è 1.
  
  Dimostrazione del punto 2 nell'appendice (facoltativo).
  
  Dunque $\forall f \in L^2(0, a)$:
  $$f(t) = \lambda\sum_\limits{n = -\infty}^{+\infty}a_ne^{2πinλt}$$
  con
  $$a_n = ∫_0^\frac{1}{λ}f(t)e^{-2πinλt}$$
  dove la serie converge in norma $\norm_\L[0,a]2$.
  (la convergenza puntuale della serie, cioè $\forall t \in (0, a)$, non è garantita)
  
  I coefficienti di Fourier $a_n$ indicano intuitivamente "quanto" delle frequenze pure $e^{2πi\lambda t}$ è presente nel segnale $f$.
- ### Base "trigonometrica" di L2(0,a)
  
  Posto $λ = \frac{1}{a}$ si ha che:
  $$\{\sqrt{λ}\} \cup \{\sqrt{2λ}\cos(2πnλt)\}_{n = 1}^{+\infty} \cup \{\sqrt{2λ}\sin(2πnλt)\}_{n = 1}^{+\infty}$$
  è una base ortonormale di $L^2(0, a)$
  
  Per la corrispondente serie di Fourier di $f \in L^2(0,a)$ si ha l'espressione con convergenza in $L^2(0, a)$:
  
  $$f(t) = \frac{a_0}{2}+ \sum\limits_{n = 1}^{+\infty} a_n \cos(2πnλt) + \sum\limits_{n=1}^{+\infty}b_n\sin(2πnλt)$$
  
  con:
  
  $$
  \begin{cases}
  a_n = 2λ\int_0^{\frac{1}{λ}}f(t)\cos(2πnλt)\,dt \\
  b_n = 2λ\int_0^{\frac{1}{λ}}f(t)\sin(2πnλt)\,dt \\
  \end{cases}
  \quad\quad(n = 1,2,3,\ldots)
  $$
  
  >[!note]
  La connessione tra base trigonometrica ed esponenziale è data dalla [[Numeri complessi#Formula di Eulero|Formula di Eulero]].
  $$e^{2πinλt} = \cos(2πnλt) + i\sin(2πnλt)$$
  
  >[!note]
  Quanto visto per $L^2(0,a)$ si adatta facilmente a $L_2(α,β)$ per ogni intervallo $(α,β) \subset \R$, tramite il cambio di variabile lineare $s = \frac{α}{β - α}(t-α)$