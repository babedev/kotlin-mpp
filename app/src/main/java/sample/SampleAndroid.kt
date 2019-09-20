package sample

import android.os.Bundle
import android.support.v7.app.AppCompatActivity
import kotlinx.android.synthetic.main.activity_main.*

actual class Sample {
    actual fun checkMe() = 44
}

actual object Platform {
    actual val name: String = "Android"
}

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        main_text.text = hello()

//        val api = Api()
//
//        api.fetch {
//            GlobalScope.launch(Dispatchers.Main) {
//                main_text.text = it.collections
//                    .map { it.name }
//                    .toString()
//            }
//        }
    }
}