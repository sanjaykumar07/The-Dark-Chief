function torch(torch,bg2) {
        loadPixels();
          var lightRadius = 150;
        // We must also call loadPixels() on the PImage since we are going to read its pixels.
        bg2.loadPixels();
        for (var y = 0; y < height; y++ ) {
          for (var x = 0; x < width; x++ ) {
            var loc = (x + y * width) * 4;
            // The functions red(), green(), and blue() pull out the three color components from a pixel.
            var r = bg2.pixels[loc   ]; 
            var g = bg2.pixels[loc + 1];
            var b = bg2.pixels[loc + 2];
      
            // Calculate an amount to change brightness
            // based on proximity to the mouse
            var distance = dist(x, y, torch.x, torch.y);
      
            // The closer the pixel is to the mouse, the lower the value of "distance" 
            // We want closer pixels to be brighter, however, so we invert the value using map()
            // Pixels with a distance greater than the lightRadius have a brightness of 0.0 
            // (or negative which is equivalent to 0 here)
            // Pixels with a distance of 0 have a brightness of 1.0.
            var adjustBrightness = map(distance, 0, lightRadius, 1, 0);
            r *= adjustBrightness;
            g *= adjustBrightness;
            b *= adjustBrightness;
      
            // Constrain RGB to between 0-255
            r = constrain(r, 0, 255);
            g = constrain(g, 0, 255);
            b = constrain(b, 0, 255);
            
            // Set the display pixel to the image pixel
            pixels[loc    ] = r;
            pixels[loc + 1] = g;
            pixels[loc + 2] = b;
            pixels[loc + 3] = 255; // Always have to set alpha
          }
        }
      
        updatePixels();
      
}