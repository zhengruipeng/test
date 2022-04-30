#include <emscripten.h>
#include <iostream>
#include <string>
using namespace std;
int counter = 0;
int blockerNumbers = 5;
int *p = &counter;
void one_iter_render(void){
    cout << "[emscripten_set_main_loop] Prints from main loop ..." << counter++ << endl;
    if(counter == 5){
//        emscripten_pause_main_loop();
        emscripten_force_exit(1);
    }
}
void one_iter_block(void* args){
    cout << "[emscripten_push_main_loop_blocker] Prints from main loop blocker..."
    << *static_cast<int*>(args)<<endl;
}
void one_iter_async(void* args){
    cout << "[emscripten_async_call] Prints from JavaScript context async ..."<<endl;

}
int main(){
    emscripten_push_main_loop_blocker(one_iter_block,p);
    emscripten_push_main_loop_blocker(one_iter_block,p);
    emscripten_push_main_loop_blocker(one_iter_block,p);
    emscripten_push_main_loop_blocker(one_iter_block,p);
    emscripten_push_main_loop_blocker(one_iter_block,p);

    emscripten_set_main_loop_expected_blockers(blockerNumbers);
    emscripten_async_call(one_iter_async,nullptr,2000);
    emscripten_set_main_loop(one_iter_render,1,1);
    return 0;
}
