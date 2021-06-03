#include <stdio.h>
#include <json-c/json.h>

int main(void)
{
    // Easy to fill variables
    int couleurs=5;
    int fiole=6;
    int tabFioles[10][10];
    for(int i=0;i<fiole;i++){
        for(int j=0;j<4;j++){
            tabFioles[i][j]=i+1;
        }
    }

    
    // Initialize access to the file
    const char *filename = "map.json";
    json_object *root = json_object_from_file("map.json");



    // Edit nbColors
    json_object *nbColors = json_object_object_get(root, "nbColors");
    json_object_set_int(nbColors, couleurs);

    // Edit nbFlasks
    json_object *nbFlasks = json_object_object_get(root, "nbFlasks");
    json_object_set_int(nbFlasks, fiole);
    


    json_object *flasks = json_object_object_get(root, "flasks"); // we go to the array flasks
    json_object *fioles[20]; 
    for(int i=0;i<fiole;i++){
        fioles[i] = json_object_array_get_idx(flasks, i); // we create a var for each flasks
    }
    
    json_object *step[20][4];
    for(int i=0;i<fiole;i++){
        for(int j=0;j<4;j++){
            step[i][j] = json_object_array_get_idx(fioles[i], j); // we setup step[i][j] for easy acces in the future.
        }
    }

    for(int i = 0; i<fiole;i++){
        for(int j=0; j<4;j++){
            json_object_set_int(step[i][j], tabFioles[i][j]); // Sending tabFioles into the json
        }
    }
    

    printf("The json file:\n\n%s\n\n", json_object_to_json_string_ext(root, JSON_C_TO_STRING_PRETTY));

    json_object_to_file(filename, root); // saving the json to map.json
    json_object_put(root);
    return 0;
}
