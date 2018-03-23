class paint01{
    paint(context, geometry, properties) {
        context.fillStyle = 'red';
 
        const centerX = geometry.width / 2;
        const centerY = geometry.height / 2;
        const radius = 30;
 
        // 普通のcanvasのように使える
        context.arc(centerX, centerY, radius, 0, Math.PI * 2);
        context.fill();
    }
}

registerPaint('test-rect', paint01);