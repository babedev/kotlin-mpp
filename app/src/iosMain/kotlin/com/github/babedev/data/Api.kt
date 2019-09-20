package com.github.babedev.data

//internal actual val applicationDispatcher: CoroutineDispatcher =
//    NsQueueDispatcher(dispatch_get_main_queue())

//internal class NsQueueDispatcher(
//    private val dispatchQueue: dispatch_queue_t
//) : CoroutineDispatcher() {
//    override fun dispatch(context: CoroutineContext, block: Runnable) {
//        dispatch_async(dispatchQueue) {
//            block.run()
//        }
//    }
//}