#include "Header.h"
#define STACKOVERFLOW -1

int main() {

	
	/*int colonne = 0;
	int colempty = 0;
	pile* pilejeux;
	newpile(&pilejeux, 4);
	int val = 0;
	int tab[10][10] = { 0 };


	do {
		printf(" Entrez le nombre de colonne (max 10): ");
		scanf("%d", &colonne);

	} while (colonne < 2);

	if (colonne < 7 && colonne >= 5) {
		colempty = 2;
	}
	else if (colonne >= 7) {
		colempty = 3;
	}
	else {
		colempty = 1;
	}

	printf("Il y aura %d fioles vides \n", colempty);
	
	
	perfpile(pilejeux, colonne, colempty);
	emptypile(colempty);

	for (int k = 0; k < 4; k++) {
		for (int p = 0; p < 4; p++) {
			pull(pilejeux, &val);
			tab[k][p] = val;
			printf("%d ", tab[k][p]);
		}
	}

	pilechange(colonne, colempty);*/

	srand(time(NULL));

	int tmp = 0;
	int tab[10][10];
	int ligne = 4;
	int colonne;
	int nbColoredCol;
	int colempty;
	int i = 0;
	int j = 0;
	bool solvable = true;

	do {
		printf(" Entrez le nombre de colonne (max 10): ");
		scanf("%d", &colonne);

	} while (colonne < 2);
	
	if (colonne < 7 && colonne >= 5) {
		colempty = 2;
	}
	else if (colonne >= 7) {
		colempty = 3;
	}
	else {
		colempty = 1;
	}

	printf("Il y aura %d fioles vides \n", colempty);

		printf(" Le tableau 2D = \n");

		nbColoredCol = colonne - colempty;

		perftab(tab, nbColoredCol);
		initEmptyCol(tab, nbColoredCol, colonne);
		swap(tab, 0, 0, 0, 2);
		swap(tab, 1, 0, 1, 2);

		affichtab(tab, ligne, colonne);

		printf("Nouveau tableau melange : \n");

		// melangtab(tab, nbColoredCol, colonne);

		translateCheat(tab, colonne,1,3,1);

		

		/*solvable = isSolvable(tab, ligne, colonne);

		while (solvable == false) {
			printf("Solution impossible, nouveau tableau : \n");
			affichtab(tab, ligne, colonne);
		}		

	while (isWin(tab, ligne, colonne) == false) {

		if (isWin(tab, ligne, colonne)) {
			printf("Gagne !\n");
			return 0;
		}
		else {
			printf("perdu ! modifie quelque chose \n");
			printf("Deplacement d'un nombre dans un autre tube : \n");

			swap(tab);

			printf("Le nouveau tableau en 2D =\n ");

			affichtab(tab, ligne, colonne);
		}
	}
	printf("C'est gagne !");
	*/
}

int swap(int tab[10][10], int premierx, int premiery, int secondx, int secondy) {

	int tmp = 0;
	
	tmp = tab[premierx][premiery];
	tab[premierx][premiery] = tab[secondx][secondy];
	tab[secondx][secondy] = tmp;


	return 0;
}

bool translate(int tab[10][10], int nbFlasks, int x, int X){
	int tmp=0;
	int nbx=0;
	int start;
	int colorx;
	int nbX=0;
	int colorX=0;
	int result;
	bool bit=true;
	
	if(x>= nbFlasks || X>= nbFlasks){
		return false;
	}

	for(int i=0; i<4 && bit ;i++){
		if(i==0){
			if(tab[i][x]!=0){
				tmp=tab[i][x];
				colorx=tmp;
				start=0;
			}
		}
		if(tmp==0 && tab[i][x]!=tmp){
			tmp=tab[i][x];
			colorx=tmp;
			start=i;
		}
		else if(tab[i][x]!=tmp){
			nbx=i-start;
			bit=false;
		}
		else if(i==3){
			nbx=i-start+1;
		}
		printf("tab[i][x]=%d, tmp=%d, start=%d, colorx=%d, nbx=%d\n", tab[i][x], tmp, start, colorx, nbx);
	}

	bit=true;

	for(int i=0; i<4 && bit;i++){
		if(tab[i][X]==0){
			nbX=i+1;
		}
		else{
			colorX=tab[i][X];
			bit=false;
		}
	}

	printf("nbx=%d, nbX=%d,colorx=%d, colorX=%d\n",nbx, nbX, colorx, colorX);

	if(nbx>nbX || (colorx!= colorX && colorX!=0)){
		result=false;
	}

	else{
		result=true;
		for(int i=0;i<nbx;i++){
			tab[(nbX-1)-(nbx - 1 - i)][X] = tab[start + i][x];
			tab[start + i][x] = 0;
		}
	}

	affichtab(tab,4,5);

	return result;
}

bool translateCheat(int tab[10][10], int nbFlasks, int x, int X, int nbMove)
{
	int tmp = 0;
	int nbx = 0;
	int start;
	int colorx;
	int nbX = 0;
	int colorX = 0;
	int result;
	bool bit = true;

	if (x >= nbFlasks || X >= nbFlasks)
	{
		return false;
	}

	for (int i = 0; i < 4 && bit; i++)
	{
		if (i == 0)
		{
			if (tab[i][x] != 0)
			{
				tmp = tab[i][x];
				colorx = tmp;
				start = 0;
			}
		}
		if (tmp == 0 && tab[i][x] != tmp)
		{
			tmp = tab[i][x];
			colorx = tmp;
			start = i;
		}
		else if (tab[i][x] != tmp)
		{
			nbx = i - start;
			bit = false;
		}
		else if (i == 3)
		{
			nbx = i - start + 1;
		}
		printf("tab[i][x]=%d, tmp=%d, start=%d, colorx=%d, nbx=%d\n", tab[i][x], tmp, start, colorx, nbx);
	}

	

	bit = true;

	for (int i = 0; i < 4 && bit; i++)
	{
		if (tab[i][X] == 0)
		{
			nbX = i + 1;
		}
		else
		{
			colorX = tab[i][X];
			bit = false;
		}
	}

	if (nbMove > nbX || nbMove >=nbx)
	{
		return false;
	}

	printf("nbx=%d, nbX=%d,colorx=%d, colorX=%d\n", nbx, nbX, colorx, colorX);

	if (nbMove > nbX)
	{
		result = false;
	}

	else
	{
		result = true;
		for (int i = 0; i < nbMove; i++)
		{
			tab[(nbx - 1 - i)][X] = tab[start + i][x];
			tab[start + i][x] = 0;
		}
	}

	affichtab(tab, 4, 5);

	return result;
}

int melangtab(int tab[10][10], int nbcoloredcoll, int colonne ) {
	int sizex = 4;
	int nbr = 0;
	int x1 = 0, x2 = 0, y1 = 0, y2 = 0;

	while (nbr < (nbcoloredcoll * sizex)) {

		x1 = rand() % 4;
		x2 = rand () % 4;
		y1 = rand () % nbcoloredcoll;
		y2 = rand () % nbcoloredcoll;

		swap(tab, x1, y1, x2, y2);
		
		nbr++;
	}

	affichtab(tab, nbcoloredcoll, colonne);

	return 0;
}

int affichtab(int tab[10][10], int sizex, int sizey) {
	for (int i = 0; i < sizex; i++) {
		for (int j = 0; j < sizey; j++) {
			printf("%4d", tab[i][j]);
		}
		printf("\n");
	}

	return 0;
}

int perftab(int tab[10][10], int nbPilecolored) {

	for (int i = 0; i < nbPilecolored; i++) {
		for (int j = 0; j < 4; j++) {
			tab[j][i] = i + 1;
		}
	}
	return 0;
}

int initEmptyCol(int tab[10][10], int nbPileColored, int sizex) {
	for (int i = nbPileColored; i < sizex ; i++) {
		for (int j = 0; j < 4; j++) {
			tab[j][i] = 0;
		}
	}
	return 0;
}

/*int randomtab(int tab[10][10], int sizex, int sizey) {
	int tmp[10] = { 0 };
	int nbColColored = sizey - emptycol(sizey);
	for (int i = 0; i < 4; i++) {
		for (int j = 0; j < nbColColored; j++) {
			tab[i][j] = rand() % sizey;
		}
	}
	return 0;
}*/



bool isWin(int tab[10][10], int sizex, int sizey) {

	int tmp = 0;
	bool success = true;

	for (int i = 0; i < sizex; i++) {
		for (int j = 0; j < 4; j++) {
			if (j == 0) {
				tmp = tab[j][i];
			}
			if (tab[j][i] != tmp) {
				success = false;
			}
		}
	}
	return success;
}

bool isSolvable(int tab[10][10], int sizex, int sizey) {
	int success;
	int tmp[10] = { 0 };
	int i, j;
	
			if (sizex <= sizey) {
				
				for (i = 0; i < sizex; i++) {
					for (j = 0; j < sizey; j++) {
						if (tab[i][j] != 0) {
							//printf(" tab i j = %d\n", tab[i][j]);
							tmp[tab[i][j] - 1] = tmp[tab[i][j]-1] + 1;
						}
					}
				}
				for (i = 0; i < 10; i++) {
					printf("%d\n", tmp[i]);
					if (tmp[i] % 4 == 0) {
						success = true;
					}
					else {
						success = false;
						return success;
					}
				}
			}
			else {
				success = false;
			}
	return success;
}

int solveur(int tab[10][10]) {



	return 0;
}

bool isFull(int tab[10][10], int pos) {
	if (tab[pos][0]) {
		printf("La colonne n'est pas pleine \n");
		return false;
	}
	else {
		printf("La colonne est pleine \n");
		return true;
	}
}

/*int emptypile(int emptycol) {

	pile* pilevide;

	for (int i = 0; i < emptycol; i++) {
		newpile(&pilevide, 4);
		afficherpile(pilevide);
	}

	return 0;
}

int perfpile(pile* pileperf, int nbPiles, int nbPileVides) {
	int tab[10][10] = { 0 };
	int temp = 0;
	int val = 0;
	int coloredstack = nbPiles - nbPileVides;
	pile* bite[10];

	
	for (int i = 0; i < coloredstack; i++) {
		newpile(&pileperf, 4);
		val++;
		for (int j = 0; j < 4; j++) {
			push(pileperf, val);
		}
		afficherpile(pileperf);		

	}
	return 0;
}*/

/*int pilechange(int nbPiles, int nbPilesVides) {

	perfpile(nbPiles, nbPilesVides);


	return 0;
}*/

/*void newpile(pile** s, int initialpileSize) {
	*s = (pile*)malloc(sizeof(pile));
	if (*s != NULL) {
		(*s)->tab = (int*)malloc(initialpileSize * sizeof(int));
		if (((*s)->tab) != NULL) {
			(*s)->maxSize = initialpileSize;
			(*s)->nbElements = 0;
		}
		else {
			free(*s);
			*s = NULL;
		}
	}
}

bool ispileFull(pile* s) { // Si la pile est pleine
	return (s->nbElements >= s->maxSize);
}

bool ispileEmpty(pile* s) { // Si la pile est vide
	return (s->nbElements == 0);
}

int push(pile* s, int valeur) { // On ajoute une valeur
	if (!ispileFull(s)) {
		s->tab[s->nbElements] = valeur;
		s->nbElements++;
		return  0;
	}
	else {
		return STACKOVERFLOW ;
	}
}

int pull(pile* s, int* valeur) { // On retir la derni�re valeur de la pile
	if (!ispileEmpty(s)) {
		*valeur = s->tab[s->nbElements - 1];
		s->nbElements--;
		return EXIT_SUCCESS;
	}
	return EXIT_FAILURE;
}

int peek(pile* s, int* valeur) {  // On r�cup�re la derni�re valeur de la pile
	if (!ispileEmpty(s)) {
		*valeur = s->tab[s->nbElements - 1];
		return EXIT_SUCCESS;
	}
	return EXIT_FAILURE;
}

int afficherpile(pile* pile) {
	int val = 0;
	int tab[4] = { 0 };

	if (pile == NULL)
	{
		return EXIT_FAILURE;
	}

	for (int i = 0; i < 4; i++) {
		pull(pile, &val);
		tab[i] = val;
		printf("%d \n", tab[i]);
	}

	printf("\n");

	return EXIT_SUCCESS;
}*/

