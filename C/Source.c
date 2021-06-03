#include "Header.h"
#define STACKOVERFLOW -1

int main() {
	srand((int)time(NULL));
	int input;

	// Var for json
	int couleurs = 0;
	int fiole = 0;
	int tab[10][10];

	printf("Do you want to automatically create the level(0) or create it by yourself(1) ?");
	scanf("%d",&input);

	if(input == 0){ //Automatic
		int tmp = 0;
		int ligne = 4;
		int colonne = 0;
		int colempty = 0;
		int nbColoredCol = 0;
		int i = 0;
		int j = 0;
		bool solvable = true;

		do
		{
			printf(" Entrez le nombre de colonne (max 10): ");
			scanf("%d", &colonne);
			fiole=colonne;

		} while (colonne < 2);

		if (colonne < 7 && colonne >= 5)
		{
			colempty = 2;
		}

		else if (colonne >= 7)
		{
			colempty = 3;
		}
		else
		{
			colempty = 1;
		}

		nbColoredCol = colonne - colempty;
		couleurs=nbColoredCol;

		int x1 = rand() % 4;
		int x2 = rand() % 4;
		int y1 = rand() % nbColoredCol;
		int y2 = rand() % nbColoredCol;

		printf("Il y aura %d fioles vides \n", colempty);

		printf(" Le tableau 2D = \n");

		perftab(tab, nbColoredCol);
		initEmptyCol(tab, nbColoredCol, colonne);
		affichtab(tab, ligne, colonne);

		printf("Nouveau tableau automatique : \n");

		for (int i = 0; i <= 200; i++)
		{
			int nvx = rand() % colonne;
			int nvX = rand() % colonne;
			int nvNombre = rand() % 3;

			translateCheat(tab, colonne, nvx, nvX, nvNombre);
		}
		
		affichtab(tab, 4, colonne);
	}
	else { //Manual

		int tmp = 0;
		int ligne = 4;
		int colonne = 0;
		int colempty = 0;
		int nbColoredCol = 0;
		int i = 0;
		int j = 0;
		int nvx = 0;
		int nvX = 0;
		int nvNombre = 0;
		int chang = 0;
		bool solvable = true;
		bool loop = true;

		do
		{
			printf(" Entrez le nombre de colonne (max 10): ");
			scanf("%d", &colonne);

		} while (colonne < 2);

		if (colonne < 7 && colonne >= 5)
		{
			colempty = 2;
		}

		else if (colonne >= 7)
		{
			colempty = 3;
		}
		else
		{
			colempty = 1;
		}

		nbColoredCol = colonne - colempty;

		printf("\nIl y aura %d fioles vides \n", colempty);

		printf("\n Le tableau 2D : \n");

		perftab(tab, nbColoredCol);
		initEmptyCol(tab, nbColoredCol, colonne);
		affichtab(tab, ligne, colonne);

		printf("\n");

		printf("Nouveau tableau manuel : \n");

		do
		{

			do
			{
				printf("\n Veuillez renseigner la colonne de depart ( min : 0 ) ( renseignez -1 pour stopper le melange ): \n");
				scanf("%d", &nvx);

				if (nvx == -1)
				{
					loop = false;
				}

			} while (nvx > 4 && loop);

			if (loop)
			{

				do
				{
					printf("Veuillez renseigner la colonne d'arrive ( max : %d ) : \n", colonne - 1);
					scanf("%d", &nvX);

				} while (nvX > colonne);

				do
				{
					printf("Veuillez renseigner combien de valeurs voulez vous deplacer ( max : 3 ) : \n");
					scanf("%d", &nvNombre);

				} while (nvNombre > 3);

				translateCheat(tab, colonne, nvx, nvX, nvNombre);

				affichtab(tab, 4, colonne);
			}
		} while (loop != false);
	}

	// Initialize access to the file
	const char *filename = "pattern.json";
	json_object *root = json_object_from_file("pattern.json");

	// Edit nbColors
	json_object *nbColors = json_object_object_get(root, "nbColors");
	json_object_set_int(nbColors, couleurs);

	// Edit nbFlasks
	json_object *nbFlasks = json_object_object_get(root, "nbFlasks");
	json_object_set_int(nbFlasks, fiole);

	json_object *flasks = json_object_object_get(root, "flasks"); // we go to the array flasks
	json_object *fioles[20];
	for (int i = 0; i < fiole; i++)
	{
		fioles[i] = json_object_array_get_idx(flasks, i); // we create a var for each flasks
	}

	json_object *step[20][4];
	for (int i = 0; i < fiole; i++)
	{
		for (int j = 0; j < 4; j++)
		{
			step[i][j] = json_object_array_get_idx(fioles[i], j); // we setup step[i][j] for easy acces in the future.
		}
	}

	for (int i = 0; i < fiole; i++)
	{
		for (int j = 0; j < 4; j++)
		{
			json_object_set_int(step[i][j], tab[j][i]); // Sending tab into the json
		}
	}
	
	json_object_to_file("map.json", root); // saving the json to map.json
	json_object_put(root);
	return 0;

	/*
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

		affichtab(tab, ligne, colonne);

		printf("Nouveau tableau melange : \n");

		// melangtab(tab, nbColoredCol, colonne);

		//translateCheat(tab, 3, 0, 2, 2);

		translateCheat(tab,colonne,0,3,2);
		translateCheat(tab, colonne, 0, 4, 1);
		translateCheat(tab, colonne, 2, 3, 2);

		affichtab(tab, ligne, colonne);
		// translate(tab,colonne,0,4);

		solve(tab,colonne);

		affichtab(tab, ligne, colonne);*/
}

void delay(int number_of_seconds)
{
	// Converting time into milli_seconds
	int milli_seconds = 1000 * number_of_seconds;

	// Storing start time
	clock_t start_time = clock();

	// looping till required time is not achieved
	while (clock() < start_time + milli_seconds)
		;
}

int swap(int tab[10][10], int premierx, int premiery, int secondx, int secondy) {

	int tmp = 0;
	
	tmp = tab[premierx][premiery];
	tab[premierx][premiery] = tab[secondx][secondy];
	tab[secondx][secondy] = tmp;


	return 0;
}

list *updateFull(int tab[10][10], list full[10], int nbFlasks)
{
	bool loop=true;
	int start;

	for (int i = 0; i < 10; i++)
	{
		full[i].color = 0;
		full[i].size = 0;
		full[i].sizeEmpty = 0;
		full[i].index = i;
	}

	for (int y = 0; y < nbFlasks; y++)
	{
		for (int i = 0; i < 4 && loop; i++)
		{
			if (full[y].color == 0 && tab[i][y] != 0)
			{
				full[y].color = tab[i][y];
				start = i;
				full[y].sizeEmpty = start;
			}
			if (i == 0)
			{
				full[y].color = tab[i][y];
			}
			else if (full[y].color != tab[i][y])
			{
				full[y].size = i - start;
				loop = false;
			}
			else if (i == 3)
			{
				full[y].size = 4 - start;
				loop = false;
				if (full[y].color == 0)
				{
					full[y].sizeEmpty = 4;
				}
			}
		}
		loop = true;
	}

	return full;
}

void Swap(list *xp, list *yp)
{
	list temp = *xp;
	*xp = *yp;
	*yp = temp;
}

void bubbleSort(list full[], int nbFlasks)
{
	int i, j;
	for (i = 0; i < nbFlasks - 1; i++)

		// Last i elements are already in place
		for (j = 0; j < nbFlasks - i - 1; j++)
			if (full[j].size > full[j + 1].size)
				Swap(&full[j], &full[j + 1]);
}

bool solve(int tab[10][10], int nbFlasks){
	list full[10];
	bool bit=true;

	while(!isWin(tab,nbFlasks,4)){
		updateFull(tab, full, nbFlasks);

		bubbleSort(full, nbFlasks);

		int first = rand() % nbFlasks;
		int second;

		while (bit)
		{
			second = rand() % nbFlasks;
			for(int i=0; i<20 && full[second].color != full[first].color;i++){
				bit = true;
			}
		}
		translate(tab, nbFlasks, first, second);
		affichtab(tab,nbFlasks, 4);
	}

	




	/*
	bool loop=true;
	list first;
	list second;
	int y=0;
	int start;
	list full[10];
	

	while (!isWin(tab, nbFlasks, 4)){

		updateFull(tab, full, nbFlasks);

		bubbleSort(full, nbFlasks);

		for(int i=0; i<nbFlasks; i++){
			printf("full[i].color=%d full[i].size=%d full[i].sizeEmpty=%d full[i].index=%d\n",full[i].color ,full[i].size ,full[i].sizeEmpty ,full[i].index);
		}

		first = full[0];
		for (int i = nbFlasks-1; i >= 1 && loop; i--)
		{
			if (full[i].color == first.color && first.size <= full[i].sizeEmpty)
			{
				printf("full[i].color=%d index=%d, first.color=%d index=%d\n",full[i].color,full[i].index, first.color, first.index);
				second = full[i];
				y=0;
				loop = false;
			}
			else if (i == 1)
			{
				if (y == 1)
				{
					return false; // We are stuck, we return false to let know we need to restart
				}
				if (first.color == 0)
				{
					i = nbFlasks-1;
					y++;
					first = full[y];
				}
				else{
				first.color = 0;
				i = 1;
				}
			}
		}
		delay(100);
		printf("first.index = %d, second.index = %d\n", first.index, second.index);
		translate(tab,nbFlasks,first.index,second.index);
		loop=true;
		affichtab(tab,4,nbFlasks);
	}

	return isWin(tab, nbFlasks, 4);*/
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
	
	if(x>= nbFlasks || X>= nbFlasks || x==X){
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
			nbx++;
		}
		if(tab[i][x]!=tmp){
			nbx=i-start;
			bit=false;
		}
		else if(i==3){
			nbx = i - start + 1;
		}
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

	if (x >= nbFlasks || X >= nbFlasks || x==X)
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


	if (nbMove > nbX)
	{
		result = false;
	}

	else
	{
		result = true;
		for (int i = 0; i < nbMove; i++)
		{
			tab[(nbX - 1 - i)][X] = tab[start + i][x];
			tab[start + i][x] = 0;
		}
	}

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

