
export default function Login() {

    return (
        <div class="container-login">
        <div id="login-row" class="row justify-content-center align-items-center">
            <div id="login-column">
                <div class="box">
                    <div class="float">
                        <form class="form" action="">
                            <div class="form-group">
                                <label for="username" class="text-white">Usuario:</label><br/>
                                <input type="text" name="username" id="username" class="form-control"/>
                            </div>
                            <div class="form-group">
                                <label for="password" class="text-white">Contraseña:</label><br/>
                                <input type="text" name="password" id="password" class="form-control"/>
                            </div>
                            <div class="form-group boton-login">
                                <input type="submit" name="submit" class="btn btn-info btn-md" value="Ingresar"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

