$baseUrl = "https://placehold.co"

# Image mappings
$images = @{
    "hero-bg.jpg" = "1920x1080/C5A059/FFFFFF/png?text=Hero+Background"
    "wish-bg.jpg" = "1920x1080/C5A059/FFFFFF/png?text=Wish+Background"
    "photo-1.jpg" = "600x400/C5A059/FFFFFF/png?text=Wedding+Photo"
    "photo-2.jpg" = "600x400/C5A059/FFFFFF/png?text=Couple+Photo"
    "photo-3.jpg" = "600x400/C5A059/FFFFFF/png?text=Love+Photo"
    "photo-4.jpg" = "600x400/C5A059/FFFFFF/png?text=Joy+Photo"
    "photo-5.jpg" = "600x400/C5A059/FFFFFF/png?text=Celebration+Photo"
    "photo-6.jpg" = "600x400/C5A059/FFFFFF/png?text=Adventure+Photo"
}

foreach ($name in $images.Keys) {
    $url = "$baseUrl/$($images[$name])"
    $output = "public/images/$name"
    Write-Host "Downloading $name..."
    Invoke-WebRequest -Uri $url -OutFile $output
}
