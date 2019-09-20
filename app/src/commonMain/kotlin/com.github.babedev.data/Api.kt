package com.github.babedev.data

import io.ktor.client.HttpClient
import io.ktor.client.request.get
import io.ktor.client.request.url
import kotlinx.coroutines.CoroutineDispatcher
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch

//internal expect val applicationDispatcher: CoroutineDispatcher

class Api {

//    private val client = HttpClient()

//    fun fetch(callback: (Collections) -> Unit) {
//        GlobalScope.launch(applicationDispatcher) {
//            val result: String = client.get {
//                url("https://www.eventpop.me/api/v1/collections")
//            }
//
//            val collections = JSON.nonstrict.parse(Collections.serializer(), result)
//
//            callback(collections)
//        }
//    }

}