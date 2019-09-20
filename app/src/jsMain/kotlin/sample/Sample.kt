package sample

actual class Sample actual constructor() {
    actual fun checkMe(): Int = 8
}

actual object Platform {
    actual val name: String = "JS"
}