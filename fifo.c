#include <stdio.h>

int main() {
    int pages[] = {1, 3, 0, 3, 5, 6, 3};
    int n = 7;              // number of pages
    int frames = 3;         // number of frames
    int frame[3];
    int i, j, k;
    int pageFaults = 0;
    int index = 0;
    int found;

    // Initialize frames with -1
    for(i = 0; i < frames; i++)
        frame[i] = -1;

    printf("Page\tFrames\n");

    for(i = 0; i < n; i++) {
        found = 0;

        // Check if page already exists
        for(j = 0; j < frames; j++) {
            if(frame[j] == pages[i]) {
                found = 1;
                break;
            }
        }

        // If not found, page fault occurs
        if(found == 0) {
            frame[index] = pages[i];
            index = (index + 1) % frames;
            pageFaults++;
        }

        printf("%d\t", pages[i]);
        for(k = 0; k < frames; k++) {
            printf("%d ", frame[k]);
        }
        printf("\n");
    }

    printf("\nTotal Page Faults = %d\n", pageFaults);

    return 0;
}