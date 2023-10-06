<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fanart</title>
</head>

<body>
    <div class="form-wrapper">
        <div class="en">
            <form action="upload.php" method="post" enctype="multipart/form-data">
                <span>Select the image you want to upload:</span><br><br>
                <label id="fileToUpload-label" for="fileToUpload">Select an Image</label>
                <input type="file" name="fileToUpload" id="fileToUpload"><br><br>
                <input type="submit" value="Upload Image" name="submit" id="submit"><br>
            </form>
        </div>

        <div class="mk">
            <form action="upload.php" method="post" enctype="multipart/form-data">
                <span>Изберете слика:</span><br><br>
                <label id="fileToUpload-label" for="fileToUpload">Избери</label>
                <input type="file" name="fileToUpload" id="fileToUpload"><br><br>
                <input type="submit" value="Upload Image" name="submit" id="submit"><br>
            </form>
        </div>
    </div>
</body>

</html>