package com.github.babedev.js

import org.w3c.dom.HTMLDivElement
import org.w3c.dom.Text
import sample.hello
import kotlin.browser.document

fun myApp() {
    val div = document.getElementById("app") as HTMLDivElement
    div.appendChild(Text(hello()))
}