tags:: complprob

- Se le VA $\{X_{i > 1}\}$ sono indipendenti e identicamente distribuite:
	- $$\frac{\sum_1^n X_i - \mathbb{E}\left[\sum_1^nX_i\right]}{\sqrt{Var \sum_1^n X_i}} \xrightarrow{n \rightarrow \infty} Z$$
	- $Z \sim N(0, 1)$ (normale standard)
	- È la ragione per cui la Gaussiana si presenta così spesso in casi reali, dato che molte situazioni possono essere viste come somme di VA (es. errori di misurazione che hanno diversi fattori, ognuno un possibile $X_i$)
