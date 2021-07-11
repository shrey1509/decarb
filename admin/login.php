<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php include '../components/linksAndScripts.php'; ?>
</head>
<body>
    <div class="offset-md-3 col-md-6 offset-md-3" style="margin-top:5rem">
        <h2>Login Form</h2>

        <form action="adminlogin.php" method="post">

          <div class="container">
            <div class="row">
                <label for="username"><b>Username</b></label>
                <input type="text" class="form-control" placeholder="Enter Username" name="username" required>
            </div>
            <div class="row">
                <label for="password"><b>Password</b></label>
                <input type="password" class="form-control" placeholder="Enter Password" name="password" required>
            </div>    
            <div class="row" style="margin-top:1rem">
                <button class="btn-primary" type="submit">Login</button>
            </div> 
            
          </div>

        </form>
    </div>

</body>
</html>

