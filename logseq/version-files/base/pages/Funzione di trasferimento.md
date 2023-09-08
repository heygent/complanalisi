tags:: complanalisi

- # Definizione
	- Sia $A : X \rightarrow Y$ un [[filtro]].
	- Sia $e_\lambda^n(t)$ la frequenza pura $\lambda n$.
		- Per comodità si definisce $e_\lambda(t) = e^{2\pi i \lambda t}$
		- $e^n_\lambda(t) = e^{2\pi i \lambda n t}$ per proprietà degli esponenziali
		- Si aggiunge l'esponente $n$ perché si è interessati a tutti i multipli della frequenza
	- Si supponga che le $e_\lambda^n(t) \in X$
	- Se $\forall\,x \in X$ suppongo che:
		- $$x(t) = \sum_{n = -\infty}^\infty c_n e_\lambda^n(t)$$
		- Ovvero posso riscrivere il segnale come somma infinita di frequenze pure moltiplicate per dei coefficienti.
	- Allora:
		- $$\begin{aligned}
		  Ax(t) &= A\left(\sum_{-\infty}^\infty c_n e_\lambda^n(t) \right) \\
		  &= A\left( \lim_{N \rightarrow +\infty} \sum_{-N}^N c_n e_\lambda^n(t)  \right) \\
		  &= \lim_{N \rightarrow +\infty} A \left( \sum_{-N}^N c_n e_\lambda^n(t)\right) &\text{per A continuo} \\
		  &= \lim_{N \rightarrow +\infty} \sum_{-N}^N c_n A(e_\lambda^n)(t) &\text{per A lineare} \\
		  &= \lim_{N \rightarrow +\infty} \sum_{-N}^N c_n f_\lambda^{(n)}(t) \\
		  &= \sum_{n = -\infty}^\infty c_n f_\lambda^{(n)}(t) \\
		  \end{aligned}$$
	- Si supponga quindi di avere $e_\lambda(t) \xrightarrow{A} f_\lambda(t)$ :
		- $$\begin{aligned}
		  e_\lambda(t + u) &= \tau_{-t} e(u) \\
		    &= e^{2\pi i \lambda(t + u)} \\
		    &= e^{2\pi i \lambda t} e^{2\pi i \lambda u} \\
		    &= e_\lambda(t) \cdot e_\lambda(u)
		    
		  \end{aligned}$$
		- $$\begin{aligned}
		  e_\lambda &\xrightarrow{A} f_\lambda \\
		  \tau_{-t}e_\lambda &\xrightarrow{A} \tau_{-t} f_\lambda
		  \end{aligned}$$
	- Per Invarianza per traslazione
		- $$\begin{aligned}
		  \tau_{-t} f_\lambda &= f_\lambda(t + u) \\
		     &= A(e_\lambda(t) \cdot e_\lambda(u)) \\
		     &= e_\lambda(t) A(e_\lambda(u)) \\
		     &= e_\lambda(t) f_\lambda(u)
		    
		  \end{aligned}$$
	- Per $u = 0$
		- $$\begin{aligned}
		  f_\lambda(t) = e_\lambda(t) f_\lambda(0) \quad \forall t \in R
		  	  
		  \end{aligned}$$
	- La risposta del sistema $f_\lambda(t) = A(e_\lambda)(t)$ agli input $e_\lambda$ è $e_\lambda(t)$ moltiplicato per una costante che dipende solo da $\lambda$ (non da $t$ )
		- $f_\lambda(0)$ sono autovalori di $A$
		- $e_\lambda$ sono autofunzioni
	- **Funzione di trasferimento del sistema** $A$:
		- background-color:: green
		  $$\lambda \rightarrow f_\lambda(0) = H(\lambda)$$
		- $$Ae_\lambda(t) = H(\lambda)e_\lambda(t)$$
	- Se $H(\lambda)$ ed $e_\lambda(t)$ sono a valori complessi si ha che:
		- Siano $H(\lambda), e_\lambda(t) = z_{1}, z_2$:
		- {{embed ((64eaeffe-5d3a-43c7-8994-7abed8fa33f7))}}
			- $\rho_1$ è il fattore per cui la frequenza viene smorzata o amplificata.
				- $\rho_{1}=|z_1|=|H(\lambda)|$
			- $\rho_2$ è 1, dato che è l'ampiezza della frequenza pura
	- $\Theta_{2}$ va a influire sulla fase iniziale del segnale, che è impercettibile dal punto di vista sonoro (e non interessante).