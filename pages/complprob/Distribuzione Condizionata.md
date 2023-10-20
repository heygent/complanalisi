tags:: complprob

- Si consideri la probabilità condizionata di due [[VA Discreta]]:
	- $$P(X = x_i| Y = y_i) = \frac{P(X = x_i, Y = y_i)}{P(Y = y_i)}$$
	- ## Verifica che si tratti di una distribuzione
	  id:: 63c4461e-c223-4ae1-8a84-51d8e011a727
		- Questa probabilità è una distribuzione. Per verificarlo devono essere dimostrate due proprietà:
			- logseq.order-list-type:: number
			  $$P(X = x_i | Y = y_i) \ge 0$$
				- Verificata sempre assumendo che gli eventi siano compatibili
			- logseq.order-list-type:: number
			  $$\sum_i P(X_i) = 1$$
				- Per verificarlo si può osservare che:
					- $$\sum_x \frac{P(X = x_i, Y = y_i)}{P(Y = y_i)} = \frac{P(Y = y_i)}{P(Y = y_i)} = 1$$
- ## [[Attesa]] condizionata
  id:: 626e53dd-a8ec-451d-8360-12d0f8802dbc
	- $$\mathbb{E}(X|Y = y_j) = \sum x_i P(X = x_i | Y = y_i) = \psi(y_j)$$
	- È importante notare che la media di una variabile condizionata da $y$ è solamente funzione di $y$.
	- Per due [[VA Continua]], $P(X \le x | Y = y) = F_{X|Y}(x)$
		- $$\begin{aligned}
		  P(X \le x | Y = y) &= \lim_{h \rightarrow 0} P(X \le x|Y \in (y, y+h)) \\
		  &= \lim_{h\rightarrow 0}\frac{P(X \le x, Y \in (y, y + h))}{P(Y \in (y, y + h))} \\
		  &= \lim_{h \rightarrow 0}\frac{\int^x_{-\infty} \int_y^{y+h} f_{X,Y}(u,v)\,dv\,du}{\int_y^{y+h} f_Y(v)\,dv} \\
		  &= \frac{\int^x_{-\infty} f_{X,Y}(u,y)\,du}{f_Y(y)} \\
		  &= \int_{-\infty}^x \frac{f_{X,Y}(u, y)}{f_Y(y)} du \\
		  &= F_{X|Y}(u|y) \\
		  &= P(X|Y)
		  \end{aligned}$$
		-