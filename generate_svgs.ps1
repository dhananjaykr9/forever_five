$images = @{
    "hero-bg.jpg" = "Hero Background"
    "wish-bg.jpg" = "Wish Background"
    "photo-1.jpg" = "Wedding Photo"
    "photo-2.jpg" = "Couple Photo"
    "photo-3.jpg" = "Love Photo"
    "photo-4.jpg" = "Joy Photo"
    "photo-5.jpg" = "Celebration Photo"
    "photo-6.jpg" = "Adventure Photo"
}

foreach ($name in $images.Keys) {
    $text = $images[$name]
    $svgContent = @"
<svg width="600" height="400" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#C5A059"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-family="Arial" font-size="24">$text</text>
</svg>
"@
    # Note: Saving as .jpg for the code to work, but content is SVG. Browsers often handle this, but to be safe/correct I should probably use .svg extension in code.
    # However, the user asked for public/images paths and I used .jpg in code. 
    # I will save as .svg and update the code to use .svg to be correct.
    # OR I can just save as .svg and rename to .jpg (browsers might complain but often render).
    # BETTER: Update the code to use .svg extension.
    
    $outputPath = "public/images/$($name -replace '\.jpg','.svg')"
    Set-Content -Path $outputPath -Value $svgContent
    Write-Host "Generated $outputPath"
}
