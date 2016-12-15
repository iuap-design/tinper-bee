<div class="sidebar u-col-xs-6 u-col-md-3">
    <ul>
        {% for key in sidebar -%}
            <li {% if loop.key==docId  %}class="selected"{% endif %}>
                <a href="/docs/{{loop.key}}">{{ loop.key }}</a>
            </li>
        {%- endfor %}
    </ul>
</div>
